import {test,chromium,expect} from "@playwright/test"

test("Interacting with Frames", async({page})=>{
    //Navigating to the Leafground website
    await page.goto("https://leafground.com/frame.xhtml");

    //interact with a button inside a frame
    const framePage1 = page.frameLocator('iframe[src="default.xhtml"]');
    await framePage1.getByRole("button",{name:"Click Me"}).click();
    
    //Assert the text changed after clicking the button
    await expect(framePage1.locator('#Click')).toHaveText("Hurray! You Clicked Me.");

    //Get the total count of frames present in the page
    const allFrames = page.frames();
    console.log(`Total number of frames present in the page: ${allFrames.length}`);

    //Interact with the button present inside the nested frames
    const framePage2 = page.frameLocator('iframe[src="page.xhtml"]').frameLocator('#frame2');
    await framePage2.locator('#Click').click();
    
    //Assert the text changed after clicking the second button
    await expect(framePage2.locator('#Click')).toHaveText("Hurray! You Clicked Me.");
})