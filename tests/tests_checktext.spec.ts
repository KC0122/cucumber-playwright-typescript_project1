import { test,expect,Page,BrowserContext,Browser,chromium} from '@playwright/test';

var browcntx1:BrowserContext;
var brows :Browser;
var page: Page;

// Annotate entire file as serial.
test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  brows  = await chromium.launch(); 
  browcntx1 = await brows.newContext();
  page = await browcntx1.newPage();
});

test('Load BBC web page & assert if the text "BBC - HOME" exists', async () => {
  await page.goto('https://www.bbc.co.uk/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/BBC - Home/);
});

test('Navigate to Sign In page', async () => {
  await page.goto('https://www.bbc.co.uk/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Sign in' }).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/account.bbc.com/);
});

test.afterAll(async () => {
  await page.close();
});