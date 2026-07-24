import {test,chromium, expect} from "@playwright/test"

//Assignment 1: Create a Lead
test("Exploring Playwright Locators - Create a Lead", async ({page}) => {
    //Navigate to CRM website
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Enter username, password and click Login button using getBys
    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
    await page.getByLabel("Password",{exact:true}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click();

    //Click CRM/SFA link using getBy
    await page.getByText("CRM/SFA",{exact:true}).click();

    //Navigate to Create Leads page under Leads menu
    await page.getByRole("link",{name:"Leads",exact:true}).click();
    await page.getByRole("link",{name:"Create Lead",exact:true}).click();

    //Enter the required fields using playwright locators for id
    const companyName = "TestLeaf";
    const firstName = "Karthiga";
    const lastName = "M";

    await page.locator('#createLeadForm_companyName').fill(companyName);
    await page.locator('#createLeadForm_firstName').fill(firstName);
    await page.locator('#createLeadForm_lastName').fill(lastName);
    await page.locator('#createLeadForm_personalTitle').fill("Mrs");
    await page.locator('#createLeadForm_generalProfTitle').fill("QA");
    await page.locator('#createLeadForm_annualRevenue').fill("5M");
    await page.locator('#createLeadForm_departmentName').fill("QA");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876543210");
    
    //Click Create Lead button using playwright locator for class
    await page.locator('.smallSubmit').click();

    //Verify the company name, first name, last name and status
    await expect(page.locator('#viewLead_companyName_sp')).toContainText(companyName);
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(firstName);
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText(lastName);
    await expect(page.locator('#viewLead_statusId_sp')).toHaveText("Assigned");
    
    //Get the page title
    const pageTitle = await page.title();
    console.log(`Page title is : ${pageTitle}`);        
})

//Assignment 2: Edit the Lead
test("Exploring Playwright Locators - Edit the Lead", async ({page}) => {
    //Navigate to CRM website
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Enter username, password and click Login button using getBys
    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
    await page.getByLabel("Password",{exact:true}).fill("crmsfa");
    await page.getByRole("button",{name:"Login"}).click();

    //Click CRM/SFA link using getBy
    await page.getByText("CRM/SFA",{exact:true}).click();

    //Navigate to Find Leads page under Leads menu
    await page.getByRole("link",{name:"Leads",exact:true}).click();
    await page.getByRole("link",{name:"Find Leads",exact:true}).click();

    //Enter the first name and click Find Leads using playwright locators
    await page.getByRole("textbox",{name :"First name:", exact : true}).fill("Karthiga");
    await page.getByRole("button",{name :"Find Leads", exact : true}).click();

    //Click the first resulting Lead ID and click Edit
    await page.locator('//table[contains(@class,"x-grid3")]//div/a').first().click();
    await page.locator('//a[@class="subMenuButton"]').filter({hasText : "Edit"}).click();

    //Edit the required fields using playwright locators for id    
    await page.locator('#updateLeadForm_companyName').fill("LeafTest");
    await page.locator('#updateLeadForm_annualRevenue').fill("10M");
    await page.locator('#updateLeadForm_departmentName').fill("SW");
    await page.locator('#updateLeadForm_description').fill("Testing purpose");
    
    //Click Update button using playwright locator
    await page.getByRole("button",{name:"Update"}).click();

    //Validate the updated details
    await expect(page.locator('#viewLead_companyName_sp')).toContainText("LeafTest");
    await expect(page.locator('#viewLead_annualRevenue_sp')).toContainText("10");
    await expect(page.locator('#viewLead_departmentName_sp')).toHaveText("SW");
    await expect(page.locator('#viewLead_description_sp')).toHaveText("Testing purpose");
    
    //Print the title of the page
    const pageTitle = await page.title();
    console.log(`Title of the page is : ${pageTitle}`);        
})

//Assignment 3: Create a New Account
test.use({storageState:"Data/login_salesforce.json"})

test.only("Exploring Playwright Locators - Create New Account", async ({page}) => {
    //Navigate to Salesforce application
    await page.goto("https://login.salesforce.com/");

    //Enter username, password using getByLabel
    await page.getByLabel("Username",{exact:true}).fill("karthiga.mano13.cf51532c5d0a@agentforce.com");
    await page.getByLabel("Password",{exact:true}).fill("Karthiga@31");
    await page.locator('#Login').click();

    //Verify the title and url of the page using appropriate assertions
    const title = await page.title();
    const url = page.url();
    console.log(`Page Title is: ${title}`);
    console.log(`URL of the page is: ${url}`);
   
    expect(title).toBe("Home | Salesforce");
    expect(url).toContain("lightning.force.com/lightning/page/home");

    //Click App Launcher using the class locator
    await page.locator('.slds-icon-waffle').click();

    //Click View All using getByText
    await page.getByText("View All",{exact:true}).click();

    await page.waitForLoadState("domcontentloaded");

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder("Search apps or items...").fill("Service");

    //Click Service using index based XPath
    await page.locator(('//mark[text()="Service"]')[1]).click();

    //Click Accounts using attribute based CSS selector
    await page.locator('a[title="Accounts"]').click();
    
    //Click New using getByRole
    await page.getByRole("button",{name:"New", exact:true}).click();

    //Enter Account name using attribute based CSS selector
    await page.locator('input[name="Name"]').fill("TestAccount");

    //Click Save button using XPath
    await page.locator('//button[@name="SaveEdit"]').click();

    //Verify the toast message displayed
    await expect(page.locator('//span[contains(@class,"toastMessage")]')).toContainText("Account");
})

