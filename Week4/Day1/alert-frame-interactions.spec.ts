import {test,chromium,expect} from "@playwright/test"

test("Interacting with Alerts and Frames", async({page})=>{
    //Navigating to the W3Schools website
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //listener to handle the alert
    page.on("dialog",async(alert)=>{
        //Printing the alert type
        console.log(`The alert type is: ${alert.type()}`);
        //Printing the message in the alert
        console.log(`The message displayed in alert is: ${alert.message()}`);
        //Accept the alert
        await alert.accept();        
    })

    //Navigate to Frame and Click "Try It" button which is inside the frame
    const framePage = page.frameLocator('#iframeResult');
    await framePage.getByRole("button",{name:"Try It"}).click();

     //Validate the message displayed after accepting the alert
    await expect(framePage.locator('//p[@id="demo"]')).toHaveText("You pressed OK!");
   

})