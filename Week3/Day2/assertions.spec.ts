import {test,chromium,expect} from "@playwright/test"

test("Login", async ({page}) => {
    //Part1: Navigate to Leaf ground website
    await page.goto("https://leafground.com/input.xhtml");

    //Part2: Validate a disabled textbox
    await expect(page.locator('(//div[@class="grid formgrid"])[3]/div/input')).toBeDisabled();
    
    //Part3: Validate an enabled textbox
    await expect(page.locator('(//div[@class="grid formgrid"])[1]/div/input')).toBeEditable();

    //Type name in the textbox
    await page.locator('(//div[@class="grid formgrid"])[1]/div/input').fill("Karthiga");

    //Part4: Soft Assertion
    await expect.soft(page.locator('(//div[@class="grid formgrid"])[2]/div/input')).toBeDisabled();   

    //await expect(page.locator('//div[@class="layout-footer"]')).toHaveCSS('background-color','rgb(69, 127, 202)');

    //Part5: Clear and Fill Data
    const textbox1 = page.locator('(//h5[text()="Clear the typed text."]/following-sibling::div/div/input)[1]');
    await textbox1.clear();
    console.log(`Printing the value after clearing the textbox: ${await textbox1.inputValue()}`);

    await textbox1.fill("Entering new text");
    console.log(`Printing the final value: ${await textbox1.inputValue()}`);


})