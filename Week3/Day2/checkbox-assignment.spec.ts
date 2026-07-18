import {test,chromium,expect} from "@playwright/test"

test("Handling Checkbox in PW", async({page})=>{
    //Navigating to leafground website
    await page.goto("https://leafground.com/checkbox.xhtml");
   
    //Click on the Basic checkbox
    await page.locator('//span[text()="Basic"]/preceding-sibling::div[1]').click();
   
    //Click on the Notification checkbox and validate the message displayed
    await page.locator('//span[text()="Ajax"]/preceding-sibling::div[1]').click();
    await expect(page.locator('//div[@role="alert"]'),'Checked').toBeVisible();
    await page.locator('//div[@role="alert"]').waitFor({state:"hidden"});    
    
    //Click on language checkbox
    await page.getByText("Java",{exact:true}).click();

    //Click on Tri State checkbox and validate the state seclected
    await page.locator('//div[contains(@class,"ui-state-hover")]').click();
    await expect(page.locator('//div[@class="ui-growl-message"]/p')).toBeVisible();
    const selectedStateOption = await page.locator('//div[@class="ui-growl-message"]/p').innerText();
    console.log(`While checking the Tri state checkbox, the state chosen is : ${selectedStateOption}`);    
    await page.locator('//div[@class="ui-growl-message"]/p').waitFor({state:"hidden"});

    //Click on Toggle Switch and validate the message displayed
    await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
    await expect(page.locator('//span[@class="ui-growl-title"]'),'Checked').toBeVisible();
    await page.locator('//span[@class="ui-growl-title"]').waitFor({state:"hidden"});

    //Validate the disabled checkbox
    await expect(page.locator('//div[contains(@class,"ui-selectbooleancheckbox")]/div[2]').last()).toHaveClass(/ui-state-disabled/);

    //Select multiple options from the dropdown
    await page.locator('//ul[@data-label="Cities"]').click();
    await page.locator('(//div[@class="ui-selectcheckboxmenu-items-wrapper"]//div/div[2])[1]').click();
    await page.locator('(//div[@class="ui-selectcheckboxmenu-items-wrapper"]//div/div[2])[2]').click();
    await page.locator('(//div[@class="ui-selectcheckboxmenu-items-wrapper"]//div/div[2])[3]').click();
    await page.locator('//ul[@data-label="Cities"]').click();

    await page.close();
})