import {Given,When,Then} from '@cucumber/cucumber';
import {expect,Page,BrowserContext,Browser,chromium} from '@playwright/test';

var browcntx1:BrowserContext;
var brows :Browser;
var page: Page;


  Given('I Launch the browser', async ()=>{       
      brows  = await chromium.launch({headless:false}); 
      browcntx1 = await brows.newContext();
      page = await browcntx1.newPage();    
  });

  When('I provide the URL for Home page of orangecrm.com', async () => {
    await page.goto('https://www.bbc.co.uk/');     
  });

  Then('Home page is loaded and checks if the text  - Orange CRM - exists or not', async () => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/BBC - Home/);
  });

  Then('Close browser', async () => {        
      await page.close();    
});