import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// npx playwright codegen  to open the codegen for recording the session

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html',{waitUntil:'load'});
  await page.pause();
  await page.getByPlaceholder('First Name').fill('Hanuma');
  await page.getByPlaceholder('Last Name').fill('Hanuma');
  await page.getByLabel('Male', { exact: true }).check();
  await page.locator('#msdd').click();
  await page.getByText('Arabic').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});
