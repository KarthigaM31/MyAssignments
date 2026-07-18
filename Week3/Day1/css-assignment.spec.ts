import {test,chromium} from "@playwright/test"

test("Login and lead creation in CRM application", async ({page}) => {
    //Navigate to CRM website
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Enter username, password and click Login button
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();

    //Click CRM/SFA link
    await page.locator('text=CRM/SFA').click();

    //Navigate to Create Leads page under Leads menu
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    //Enter the required fields
    await page.locator('#createLeadForm_companyName').fill("TestLeaf");
    await page.locator('#createLeadForm_firstName').fill("Karthiga");
    await page.locator('#createLeadForm_lastName').fill("M");
    await page.locator('#createLeadForm_personalTitle').fill("Mrs");
    await page.locator('#createLeadForm_generalProfTitle').fill("QA");
    await page.locator('#createLeadForm_annualRevenue').fill("5M");
    await page.locator('#createLeadForm_departmentName').fill("QA");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876543210");
    
    //Click Create Lead button
    await page.locator('.smallSubmit').click();
    
    //Get the page title
    const pageTitle = await page.title();
    console.log(`Page title is : ${pageTitle}`);        

    await page.waitForTimeout(2000);
})


