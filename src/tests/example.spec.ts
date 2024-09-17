import { expect } from '@playwright/test';
import test from '../utils/fixture'
import { WelcomePageActions } from '../pageFactory/actions/WelcomePageActions';


test.describe.configure({ mode: 'serial',
  retries: 1,
  timeout:25000
 });
test('has title', async ({ page },testInfo) => {
  console.log('what is the retry count..'+testInfo.retry);
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

test.only('test', async ({ page, welcomePageActions }) => {
  test.setTimeout(400000);
  await page.goto('https://demo.automationtesting.in/Register.html',{waitUntil:'load'});
  welcomePageActions.fill_firstname("hanuma");
  welcomePageActions.fill_Lastname("hanuma");
  await page.locator("//label[text()='Address']/following-sibling::div/textarea").pressSequentially(" this is playwright session");
  await page. locator('input[name="radiooptions"][value="Male"]').check();
  await page.locator('#checkbox1[value="Cricket"]').check();
  await page.locator('#checkbox2[value="Movies"]').check();
  const skill = page.locator("select#Skills");
  await skill.selectOption('XHTML');
  await page.locator('#imagesrc').setInputFiles('index.html');
  await page.getByRole('button', { name: 'Submit' }).click({button:'left', timeout:1000});
  
});
test('practice grap and drop', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/',{waitUntil:'load'});
  const frame = page.frameLocator("//iframe[@class ='demo-frame lazyloaded']");
  await frame.locator('(//*[@id="gallery"]//img)[1]').dragTo(frame.locator("#trash"));
  await page.locator('').and(page.locator(''));
  await expect(page.getByTestId('status')).toHaveText(/first[0-9]/);
});
