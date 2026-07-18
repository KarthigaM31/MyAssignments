import {test,chromium, expect} from '@playwright/test'

//Skip login using storage state
test.use({storageState:"Data/login_salesforce.json"})

//Assignment : 1 Create Lead
test("Create Leads in Salesforce Application", async({page}) => {
    //Navigate to Salesforce application
    //await page.goto("https://login.salesforce.com");
    await page.goto("https://orgfarm-b8df38e484-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

//------------------------------------------------------------------------//
    //Login to the salesforce application
    //await page.locator('//input[@id="username"]').fill("karthiga.mano13.cf51532c5d0a@agentforce.com");
    //await page.locator('//input[@id="password"]').fill("******");
    //await page.locator('//input[@id="Login"]').click();    
 //------------------------------------------------------------------------//
    //Click on toggle menu button and close it
    await page.getByTitle("Menu",{exact:true}).click();
    await page.getByTitle("Close Panel",{exact:true}).click();
    
    //Navigate to Sales page from App Launcher
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.locator('//button[text()="View All"]').click();
   
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    await page.getByRole("link",{name:"Sales",exact:true}).click();

    //Click on Leads tab and New Button
    await page.getByTitle("Leads",{exact:true}).click();
    await page.locator('//button[@name="New"]').click();

    const salutationName = "Ms.";
    const lastName = "LN";
    const companyName = "Test";
    //Select Salutation dropdown
    await page.getByRole("combobox",{name:"Salutation"}).click();
    await page.getByText(salutationName,{exact:true}).click();

    //Enter Last Name, Company Name and Click Save 
    await page.getByPlaceholder("Last Name",{exact:true}).fill(lastName);
    await page.locator('//input[@name="Company"]').fill(companyName);
    await page.getByRole("button",{name:"Save",exact:true}).click();

    //Verify the Leads Name created
    await expect(page.locator('//slot[@name="primaryField"]/lightning-formatted-name')).toHaveText(`${salutationName} ${lastName}`);

})
//Assignment : 2 Edit Lead
test("Edit Leads in Salesforce Application", async({page}) => {
    //Navigate to Salesforce application
    await page.goto("https://orgfarm-b8df38e484-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    //Click on toggle menu button and close it
    await page.getByTitle("Menu",{exact:true}).click();
    await page.getByTitle("Close Panel",{exact:true}).click();
    
    //Navigate to Sales page from App Launcher
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.locator('//button[text()="View All"]').click();
   
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Sales");
    await page.getByRole("link",{name:"Sales",exact:true}).click();

    //Click on Leads tab and Edit Button
    await page.getByTitle("Leads",{exact:true}).click();
    await page.getByRole("button",{name:"Show Actions",exact:true}).click();
    await page.getByTitle("Edit",{exact:true}).first().click();

    const salutationName1 = "Mrs.";
    const lastName1 = "Last";
    const companyName1 = "TestLeaf";
    //Select Salutation dropdown
    await page.getByRole("combobox",{name:"Salutation"}).click();
    await page.getByText(salutationName1,{exact:true}).click();

    //Enter Last Name, Company Name and Click Save 
    await page.getByPlaceholder("Last Name",{exact:true}).fill(lastName1);
    await page.locator('//input[@name="Company"]').fill(companyName1);
    await page.getByRole("button",{name:"Save",exact:true}).click();

    //Verify the Leads details are updated correctly
    await page.locator('//div[@class="name-field-wrapper"]//a').click();
    await expect(page.locator('//slot[@name="primaryField"]/lightning-formatted-name')).toHaveText(`${salutationName1} ${lastName1}`);
    await expect(page.locator('//p[@title="Company"]/following-sibling::p//lightning-formatted-text')).toHaveText(companyName1);

})

//Assignment : 3 Create Individuals
test("Create Individuals in Salesforce Application", async({page}) => {
    //Navigate to Salesforce application
    await page.goto("https://orgfarm-b8df38e484-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    //Click on toggle menu button and close it
    await page.getByTitle("Menu",{exact:true}).click();
    await page.getByTitle("Close Panel",{exact:true}).click();
    
    //Navigate to Individuals page from App Launcher
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.locator('//button[text()="View All"]').click();
   
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Individuals");
    await page.getByRole("link",{name:"Individuals",exact:true}).click();

    const lastName2 = "Last";
    //Click on Create Individuals, enter Last name and Save
    await page.getByRole("button",{name:"Individuals List"}).click();
    await page.getByRole("menuitem",{name:"New Individual",exact:true}).click();
    await page.getByPlaceholder("Last Name",{exact:true}).fill(lastName2);
    await page.getByRole("button",{name:"Save",exact:true}).click();

    //Validate the Individual details
    await expect(page.locator('//div[text()="Individual"]/following-sibling::div/span')).toHaveText(`${lastName2}`);
})

//Assignment : 4 Edit Individuals
test.only("Edit Individuals in Salesforce Application", async({page}) => {
    //Navigate to Salesforce application
    await page.goto("https://orgfarm-b8df38e484-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home");

    //Click on toggle menu button and close it
    await page.getByTitle("Menu",{exact:true}).click();
    await page.getByTitle("Close Panel",{exact:true}).click();
    
    //Navigate to Individuals page from App Launcher
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator('//button[text()="View All"]').click();
   
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Individuals");
    await page.getByRole("link",{name:"Individuals",exact:true}).click();

    const lastName3 = "Last";
    //Search for Individuals and edit
    await page.getByRole("searchbox",{name:"Search this list..."}).fill(lastName3);
    //await page.locator('tr').filter({hasText:lastName3}).locator('button').last().click();
    await page.locator('tr').filter({hasText:lastName3}).locator('//td//button/lightning-primitive-icon').last().click();
    await page.getByTitle("Edit",{exact:true}).first().click();

    const salutationName2 = "Mr.";
    const firstName = "First";

    //Enter First name, Salutation and save
    await page.getByRole("button",{name:"Salutation"}).click();
    await page.getByRole("button", {name:`Salutation ${salutationName2}`,exact:true}).click();
    await page.getByPlaceholder("First Name",{exact:true}).fill(firstName);
    await page.getByRole("button",{name:"Save",exact:true}).click();

    //Validate the First Name of the individual
    await expect(page.locator('//span[@title="Name"]/ancestor::thead//following-sibling::tbody//th//slot/span')).toContainText(firstName);
})