import { test, expect, type Page } from "@playwright/test";

// ─── Helpers ─────────────────────────────────────────────────────────────────

let _counter = 0;
function uniqueUser() {
  _counter += 1;
  const ts = `${Date.now()}${_counter}`.slice(-10);
  return {
    name: "Page Tester",
    email: `pt${ts}@test.local`,
    username: `pt${ts}`.slice(0, 15),
    password: "Aa1!aaaa",
  };
}

/**
 * Reset the DB, register a new user via the test API endpoints, inject the
 * token into the browser's localStorage, and return the user (with token).
 */
async function setupUser(page: Page) {
  await page.request.post("/api/test/reset");

  const user = uniqueUser();

  const sendRes = await page.request.post("/api/send-code", { data: user });
  expect(sendRes.ok()).toBeTruthy();

  const codeRes = await page.request.get(
    `/api/test/email-code?email=${encodeURIComponent(user.email)}`,
  );
  expect(codeRes.ok()).toBeTruthy();
  const { code } = await codeRes.json();

  const regRes = await page.request.post("/api/register", {
    data: { ...user, userEmailVerificationCode: String(code) },
  });
  expect(regRes.ok()).toBeTruthy();
  const { token } = await regRes.json();

  // Navigate to the app origin so localStorage is writable, then inject token.
  await page.goto("/");
  await page.evaluate((t) => localStorage.setItem("token", t), token);

  return { ...user, token };
}

/**
 * Create a draft page via the API, fill in the required contents, and return
 * the draft pageId. This skips the browser wizard steps for type, contents,
 * thumbnail, and files so configuration tests can jump straight to step 5.
 */
async function createDraftWithContent(
  page: Page,
  token: string,
  type: "private" | "public" = "private",
): Promise<string> {
  const newRes = await page.request.post("/api/new-page", {
    data: { page: { type } },
    headers: { authorization: token },
  });
  expect(newRes.ok()).toBeTruthy();
  const { id } = await newRes.json();

  const contentRes = await page.request.patch(`/api/new-page/page-contents/${id}`, {
    data: {
      page: {
        type,
        contents: {
          title: "E2E Configuration Test Page",
          briefDes: "Brief description for E2E configuration testing.",
          targets: "Automated test suite.",
          body: "<p>Body content for the E2E configuration test.</p>",
        },
      },
    },
    headers: { authorization: token },
  });
  expect(contentRes.ok()).toBeTruthy();

  return String(id);
}

/**
 * Pre-set the URL (and optionally configs) on a draft page via API, then
 * navigate the browser to the final step wizard page.
 * Pre-setting the URL avoids input-timing issues and lets the browser
 * load the final step with the URL already populated from the DB.
 */
async function goToFinalStep(
  page: Page,
  token: string,
  pageId: string,
  url: string,
) {
  await page.request.patch(`/api/new-page/final-step/${pageId}`, {
    data: {
      page: {
        type: "private",
        configurations: { comments: false, rating: false, anonymously: false },
        url,
      },
    },
    headers: { authorization: token },
  });

  await page.goto(`/new-page/final-step?id=${pageId}`);
  await page.waitForSelector('[data-testid="toggle-comments"]');
}

/** Return true when the toggle icon shows fa-toggle-on (visually flipped on). */
async function isToggleOn(page: Page, testId: string): Promise<boolean> {
  const cls = await page.locator(`[data-testid="${testId}"] i`).getAttribute("class");
  return (cls ?? "").includes("fa-toggle-on");
}

// ─── Full wizard flow ─────────────────────────────────────────────────────────

test.describe("page creation — full wizard (private)", () => {
  test("walks all 5 steps and publishes; page renders title, comments, ratings, and author", async ({
    page,
  }) => {
    const user = await setupUser(page);

    // ── Step 1: choose page type ──────────────────────────────────────────
    await page.goto("/new-page/initial-step");
    await page.getByTestId("type-private").click();
    await page.getByTestId("initial-step-next").click();
    await page.waitForURL("**/new-page/page-contents**");

    // ── Step 2: fill contents ─────────────────────────────────────────────
    await page.locator("#title").fill("Full Wizard Private Page");
    await page.locator("#briefDes").fill("Written via the full browser wizard.");
    await page.locator("#targets").fill("QA engineers running E2E tests.");

    const editorFrame = page.frameLocator("iframe[id$='_ifr']");
    await editorFrame.locator("body").waitFor({ state: "visible" });
    await editorFrame.locator("body").click();
    await editorFrame.locator("body").pressSequentially("This is the body of the full wizard page.");

    await page.getByTestId("page-contents-next").click();
    await page.waitForURL("**/new-page/page-thumbnail**");

    // ── Step 3: skip thumbnail ────────────────────────────────────────────
    await page.getByTestId("page-thumbnail-next").click();
    await page.waitForURL("**/new-page/attach-files**");

    // ── Step 4: skip attach files ─────────────────────────────────────────
    await page.getByTestId("attach-files-next").click();
    await page.waitForURL("**/new-page/final-step**");

    // ── Step 5: verify defaults, set URL, publish ─────────────────────────
    await page.waitForSelector('[data-testid="toggle-comments"]');

    // Default state: comments on, ratings on, anonymous off.
    expect(await isToggleOn(page, "toggle-comments")).toBe(true);
    expect(await isToggleOn(page, "toggle-rating")).toBe(true);
    expect(await isToggleOn(page, "toggle-anonymously")).toBe(false);

    // Fill the URL slug via the browser input.
    await page.getByTestId("config-url").fill("full-wizard-page");
    await page.getByTestId("config-url").press("Tab");

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });
    expect(page.url()).toContain("status=success");

    // ── Verify the published page ─────────────────────────────────────────
    await page.goto(`/${user.username}/full-wizard-page`);
    await page.waitForSelector("h1");

    await expect(page.locator("h1")).toContainText("Full Wizard Private Page");
    await expect(page.locator("#comments2")).toBeVisible();
    await expect(page.locator(".page__rating")).toBeVisible();
    await expect(page.locator(".page__author")).toBeVisible();
    await expect(page.locator('[data-testid="comments-disabled"]')).not.toBeVisible();
    await expect(page.locator('[data-testid="ratings-disabled"]')).not.toBeVisible();
    await expect(page.locator('[data-testid="author-anonymous"]')).not.toBeVisible();
  });
});

// ─── Configuration toggle tests ──────────────────────────────────────────────

test.describe("page creation — private page configurations", () => {
  test("comments on (default) → comments section visible on published page", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "comments-on-page");

    // Default: comments NOT disabled → icon shows toggle-on.
    expect(await isToggleOn(page, "toggle-comments")).toBe(true);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/comments-on-page`);
    await page.waitForSelector("h1");

    await expect(page.locator("#comments2")).toBeVisible();
    await expect(page.locator('[data-testid="comments-disabled"]')).not.toBeVisible();
  });

  test("comments disabled → 'Comments are disabled' shown, comment form hidden", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "comments-off-page");

    // Toggle comments OFF (disable them).
    await page.getByTestId("toggle-comments").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-comments")).toBe(false);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/comments-off-page`);
    await page.waitForSelector("h1");

    await expect(page.locator('[data-testid="comments-disabled"]')).toBeVisible();
    await expect(page.locator('[data-testid="comments-disabled"]')).toContainText(
      "Comments are disabled for this page.",
    );
    await expect(page.locator("#comments2")).not.toBeVisible();
  });

  test("ratings on (default) → ratings section visible on published page", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "ratings-on-page");

    expect(await isToggleOn(page, "toggle-rating")).toBe(true);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/ratings-on-page`);
    await page.waitForSelector("h1");

    await expect(page.locator(".page__rating")).toBeVisible();
    await expect(page.locator('[data-testid="ratings-disabled"]')).not.toBeVisible();
  });

  test("ratings disabled → 'Ratings are disabled' shown, thumbs buttons hidden", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "ratings-off-page");

    await page.getByTestId("toggle-rating").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-rating")).toBe(false);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/ratings-off-page`);
    await page.waitForSelector("h1");

    await expect(page.locator('[data-testid="ratings-disabled"]')).toBeVisible();
    await expect(page.locator('[data-testid="ratings-disabled"]')).toContainText(
      "Ratings are disabled for this page.",
    );
    await expect(page.locator(".page__rating")).not.toBeVisible();
  });

  test("anonymous off (default) → author section visible on published page", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "anon-off-page");

    expect(await isToggleOn(page, "toggle-anonymously")).toBe(false);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/anon-off-page`);
    await page.waitForSelector("h1");

    await expect(page.locator(".page__author")).toBeVisible();
    await expect(page.locator('[data-testid="author-anonymous"]')).not.toBeVisible();
  });

  test("anonymous on → 'created anonymously' shown, author section hidden", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "anon-on-page");

    await page.getByTestId("toggle-anonymously").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-anonymously")).toBe(true);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/anon-on-page`);
    await page.waitForSelector("h1");

    await expect(page.locator('[data-testid="author-anonymous"]')).toBeVisible();
    await expect(page.locator('[data-testid="author-anonymous"]')).toContainText(
      "This page has been created anonymously.",
    );
    await expect(page.locator(".page__author")).not.toBeVisible();
  });

  test("toggle each config on then back off — all defaults restored on published page", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "toggle-roundtrip-page");

    // Comments: disable then re-enable.
    await page.getByTestId("toggle-comments").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-comments")).toBe(false);

    await page.getByTestId("toggle-comments").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-comments")).toBe(true);

    // Ratings: disable then re-enable.
    await page.getByTestId("toggle-rating").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-rating")).toBe(false);

    await page.getByTestId("toggle-rating").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-rating")).toBe(true);

    // Anonymous: enable then disable.
    await page.getByTestId("toggle-anonymously").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-anonymously")).toBe(true);

    await page.getByTestId("toggle-anonymously").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );
    expect(await isToggleOn(page, "toggle-anonymously")).toBe(false);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/toggle-roundtrip-page`);
    await page.waitForSelector("h1");

    // All defaults: every section visible, no disabled messages.
    await expect(page.locator("#comments2")).toBeVisible();
    await expect(page.locator(".page__rating")).toBeVisible();
    await expect(page.locator(".page__author")).toBeVisible();
    await expect(page.locator('[data-testid="comments-disabled"]')).not.toBeVisible();
    await expect(page.locator('[data-testid="ratings-disabled"]')).not.toBeVisible();
    await expect(page.locator('[data-testid="author-anonymous"]')).not.toBeVisible();
  });

  test("all configs disabled → all three disabled messages shown, live sections hidden", async ({
    page,
  }) => {
    const user = await setupUser(page);
    const pageId = await createDraftWithContent(page, user.token);
    await goToFinalStep(page, user.token, pageId, "all-disabled-page");

    // Disable comments.
    await page.getByTestId("toggle-comments").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );

    // Disable ratings.
    await page.getByTestId("toggle-rating").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );

    // Enable anonymous.
    await page.getByTestId("toggle-anonymously").click();
    await page.waitForResponse((r) =>
      r.url().includes("/new-page/final-step") && r.request().method() === "PATCH",
    );

    expect(await isToggleOn(page, "toggle-comments")).toBe(false);
    expect(await isToggleOn(page, "toggle-rating")).toBe(false);
    expect(await isToggleOn(page, "toggle-anonymously")).toBe(true);

    await page.getByTestId("final-step-publish").click();
    await page.waitForURL("**/new-page/message**", { timeout: 15_000 });

    await page.goto(`/${user.username}/all-disabled-page`);
    await page.waitForSelector("h1");

    await expect(page.locator('[data-testid="comments-disabled"]')).toBeVisible();
    await expect(page.locator('[data-testid="ratings-disabled"]')).toBeVisible();
    await expect(page.locator('[data-testid="author-anonymous"]')).toBeVisible();
    await expect(page.locator("#comments2")).not.toBeVisible();
    await expect(page.locator(".page__rating")).not.toBeVisible();
    await expect(page.locator(".page__author")).not.toBeVisible();
  });
});
