import { test, expect, type Page } from "@playwright/test";

const timestamp = Date.now();
const USER = {
  name: "Test User",
  username: `tuser${timestamp}`.slice(0, 15),
  email: `tuser${timestamp}@test.local`,
  password: "Aa1!aaaa",
};

async function resetDb(page: Page) {
  const res = await page.request.post("/api/test/reset");
  expect(res.ok()).toBeTruthy();
}

async function getEmailCode(page: Page, email: string): Promise<string> {
  const res = await page.request.get(
    `/api/test/email-code?email=${encodeURIComponent(email)}`,
  );
  expect(res.ok()).toBeTruthy();
  const { code } = await res.json();
  return String(code);
}

test.describe("auth flow", () => {
  test.beforeEach(async ({ page }) => {
    await resetDb(page);
  });

  test("register → verify email → logout → login", async ({ page }) => {
    // ── 1. Registration form ──────────────────────────────────────────────
    await page.goto("/register");

    await page.getByTestId("register-name").fill(USER.name);
    await page.getByTestId("register-name").press("Tab");

    await page.getByTestId("register-username").fill(USER.username);
    await page.getByTestId("register-username").press("Tab");
    await page.waitForResponse((r) =>
      r.url().includes("/api/username-availability"),
    );

    await page.getByTestId("register-email").fill(USER.email);
    await page.getByTestId("register-email").press("Tab");

    await page.getByTestId("register-password").fill(USER.password);
    await page.getByTestId("register-confirm-password").fill(USER.password);

    await page.getByTestId("register-submit").click();

    // ── 2. Verify email ───────────────────────────────────────────────────
    await expect(page.locator("[data-testid='verify-digit-0']")).toBeVisible();

    const code = await getEmailCode(page, USER.email);
    for (let i = 0; i < 5; i++) {
      await page.getByTestId(`verify-digit-${i}`).fill(code[i]);
    }
    // VerifyEmail auto-submits once all 5 digits are filled

    // ── 3. Confirm we landed on /home ─────────────────────────────────────
    await page.waitForURL("**/home", { timeout: 10_000 });
    await expect(page).toHaveURL(/\/home$/);

    // ── 4. Logout ─────────────────────────────────────────────────────────
    await page.getByTestId("topnav-user-dropdown-md").click();
    await page.getByTestId("topnav-logout-md").click();

    await page.waitForURL("**/", { timeout: 5_000 });
    await expect(page).toHaveURL(/\/$/);

    // ── 5. Login ──────────────────────────────────────────────────────────
    await page.goto("/login");

    await page.getByTestId("login-email").fill(USER.email);
    await page.getByTestId("login-password").fill(USER.password);
    await page.getByTestId("login-submit").click();

    await page.waitForURL("**/home", { timeout: 10_000 });
    await expect(page).toHaveURL(/\/home$/);
  });
});
