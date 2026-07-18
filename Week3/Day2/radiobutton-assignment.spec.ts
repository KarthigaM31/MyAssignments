import {test,chromium,expect} from "@playwright/test"

test("Handling Radiobuttons in PW", async({page})=>{
    //Navigating to leafground website
    await page.goto("https://leafground.com/radio.xhtml");
    //Assertion to validate the default checked radio button
    await expect(page.locator('//table[contains(@id,"console2")]//label[text()="Safari"]')).toBeChecked();

    //Validating with all the applicable values and printing the checked value
    const browserValues = page.locator('//table[contains(@id,"console2")]//label');
    const browserCount = await browserValues.count();
    for(let i = 0; i < browserCount ; i++){
        if(await browserValues.nth(i).isChecked()){
            console.log(`The default checked browser is: ${await browserValues.nth(i).innerText()}`);
        }
    }

    //Click your most favourite browser
    await page.locator('//table[contains(@id,"console1")]//label[text()="Chrome"]').check();

    //Assert to validate the checked browser is enabled
    await expect(page.locator('//table[contains(@id,"console1")]//label[text()="Chrome"]')).toBeEnabled();

    //Click one of the cities
    await page.getByText("Chennai",{exact:true}).check();

    //Find the default selected button
    const ageValues = page.locator('//div[contains(@id,"age")]//label');
    const ageCount = await ageValues.count();
    for(let j = 0; j < ageCount ; j++){
        if(await ageValues.nth(j).isChecked()){
            console.log(`The default selected age group is: ${await ageValues.nth(j).innerText()}`);
        }
    }

    //Select the age group and assert the selected button
    await page.locator('//div[contains(@id,"age")]//label').first().check();
    await expect(page.locator('//div[contains(@id,"age")]//label').first()).toBeChecked();

})