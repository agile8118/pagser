import { test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FIXTURES = path.join(__dirname, "../fixtures");

interface UserFixture {
  name: string;
  username: string;
  email: string;
  headline: string;
  biography: string;
  links: {
    website: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    facebook: string;
  };
}

interface PageTemplate {
  title: string;
  briefDescription: string;
  targets: string;
  body: string;
  tags: string[];
}

const users: UserFixture[] = JSON.parse(
  fs.readFileSync(path.join(FIXTURES, "users.json"), "utf8"),
);
const pageTemplates: PageTemplate[] = JSON.parse(
  fs.readFileSync(path.join(FIXTURES, "pages.json"), "utf8"),
);

const PASSWORD = "Aa1!aaaa";

// 10 config combinations cycling across all 250 pages
const CONFIGS = [
  { type: "public", configurations: { comments: false, rating: false, anonymously: false, links: false } },
  { type: "public", configurations: { comments: true, rating: false, anonymously: false, links: false } },
  { type: "public", configurations: { comments: false, rating: true, anonymously: false, links: false } },
  { type: "public", configurations: { comments: false, rating: false, anonymously: true, links: false } },
  { type: "public", configurations: { comments: true, rating: true, anonymously: false, links: true } },
  { type: "private", configurations: { comments: false, rating: false, anonymously: false, links: false } },
  { type: "private", configurations: { comments: true, rating: false, anonymously: false, links: false } },
  { type: "private", configurations: { comments: false, rating: true, anonymously: false, links: false } },
  { type: "private", configurations: { comments: false, rating: false, anonymously: true, links: false } },
  { type: "private", configurations: { comments: true, rating: true, anonymously: true, links: false } },
] as const;

test("seed database with 50 users and 250 pages", async ({ request }) => {
  test.setTimeout(600_000);

  // Reset for a clean, repeatable seed run
  const resetRes = await request.post("/api/test/reset");
  if (resetRes.status() !== 200) {
    throw new Error(`DB reset failed: ${resetRes.status()}`);
  }

  const manifest: {
    users: Array<{ username: string; email: string; token: string }>;
    pages: Array<{ id: number; type: string; url: string; authorUsername: string }>;
  } = { users: [], pages: [] };

  for (let ui = 0; ui < users.length; ui++) {
    const userData = users[ui];
    console.log(`[${ui + 1}/${users.length}] Registering ${userData.username}…`);

    // 1. Send email verification code
    const sendRes = await request.post("/api/send-code", {
      data: {
        name: userData.name,
        email: userData.email,
        username: userData.username,
        password: PASSWORD,
      },
    });
    if (sendRes.status() !== 200) {
      throw new Error(
        `send-code failed for ${userData.email}: ${sendRes.status()} ${await sendRes.text()}`,
      );
    }

    // 2. Retrieve code from DB (test endpoint)
    const codeRes = await request.get(
      `/api/test/email-code?email=${encodeURIComponent(userData.email)}`,
    );
    if (codeRes.status() !== 200) {
      throw new Error(`email-code lookup failed: ${codeRes.status()} ${await codeRes.text()}`);
    }
    const { code } = await codeRes.json();

    // 3. Register → receive auth token
    const regRes = await request.post("/api/register", {
      data: {
        name: userData.name,
        email: userData.email,
        username: userData.username,
        password: PASSWORD,
        userEmailVerificationCode: code,
      },
    });
    if (regRes.status() !== 201) {
      throw new Error(
        `register failed for ${userData.username}: ${regRes.status()} ${await regRes.text()}`,
      );
    }
    const { token } = await regRes.json();

    // 4. Fill out profile
    await request.patch("/api/profile", {
      headers: { authorization: token },
      data: {
        name: userData.name,
        headline: userData.headline,
        biography: userData.biography,
        links: userData.links,
      },
    });

    manifest.users.push({ username: userData.username, email: userData.email, token });

    // 5. Create 5 pages for this user
    for (let pi = 0; pi < 5; pi++) {
      const globalPageIndex = ui * 5 + pi;
      const config = CONFIGS[globalPageIndex % CONFIGS.length];
      const template = pageTemplates[globalPageIndex % pageTemplates.length];

      // Create draft
      const draftRes = await request.post("/api/new-page", {
        headers: { authorization: token },
        data: { page: { type: config.type } },
      });
      if (draftRes.status() !== 201) {
        throw new Error(
          `new-page draft failed (user ${userData.username}, page ${pi}): ${draftRes.status()} ${await draftRes.text()}`,
        );
      }
      const { id: pageId } = await draftRes.json();

      // Set page contents
      await request.patch(`/api/new-page/page-contents/${pageId}`, {
        headers: { authorization: token },
        data: {
          page: {
            type: config.type,
            contents: {
              title: template.title,
              briefDes: template.briefDescription,
              body: template.body,
              targets: template.targets,
            },
          },
        },
      });

      // Set final-step config (tags for public, URL for private)
      const finalBody: Record<string, unknown> = {
        page: {
          type: config.type,
          configurations: config.configurations,
          ...(config.type === "public"
            ? { tags: template.tags.slice(0, 4) }
            : { url: `${userData.username}-p${pi + 1}` }),
        },
      };
      await request.patch(`/api/new-page/final-step/${pageId}`, {
        headers: { authorization: token },
        data: finalBody,
      });

      // Publish
      const publishRes = await request.post(`/api/new-page/${pageId}`, {
        headers: { authorization: token },
      });
      if (publishRes.status() !== 200) {
        throw new Error(
          `publish failed (user ${userData.username}, page ${pi}): ${publishRes.status()} ${await publishRes.text()}`,
        );
      }
      const { url } = await publishRes.json();

      manifest.pages.push({
        id: pageId,
        type: config.type,
        url,
        authorUsername: userData.username,
      });
    }
  }

  // Write manifest for seed-comments.ts (phase 2)
  fs.writeFileSync(
    path.join(FIXTURES, ".seed-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(
    `Seed complete: ${manifest.users.length} users, ${manifest.pages.length} pages. Manifest written.`,
  );
});
