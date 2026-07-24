import {test, chromium, expect} from "@playwright/test"
import path from "path"
import fs from "fs"

test("File upload assignment", async({page})=>{
    //File upload without clicking upload button
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator('[type="file"]').last().setInputFiles(path.join(__dirname,"../../../../Data/TestLeaf Logo.png"));
    await page.waitForTimeout(3000);

    //Image upload inside the red square area
    const fileUpload = await Promise.all([page.waitForEvent("filechooser"), page.locator('#drag-drop-upload').click()]);
    await fileUpload[0].setFiles(path.join(__dirname,"../../../../Data/TestLeaf Logo.png"));
    await page.waitForTimeout(3000);

    //Assert that the file has been uploaded
    await expect(page.locator('#drag-drop-upload')).toContainClass("dz-started");

})

test.only("File download assignment",async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/download");
    //File Download
    const fileDownload = await Promise.all([page.waitForEvent("download"),page.locator('//a[text()="testUpload.json"]').click()]); 

    //Saving the file in below path and name
    const path = `Data/${fileDownload[0].suggestedFilename()}`;
    await fileDownload[0].saveAs(path);

    //Assert that the file has been downloaded in the required path
    expect(fs.existsSync(path)).toBeTruthy();
    
    await page.waitForTimeout(3000);
    
})