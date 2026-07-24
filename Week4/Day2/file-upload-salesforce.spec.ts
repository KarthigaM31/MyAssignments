import {test, chromium, expect} from "@playwright/test"
import path from "path"

test("File upload salesforce", async({page})=>{
    //Login to Salesforce application
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username",{exact:true}).fill("karthiga.mano13.cf51532c5d0a@agentforce.com");
    await page.getByLabel("Password",{exact:true}).fill("Karthiga@31");
    await page.locator('#Login').click();

    //Click App Launcher and search for Accounts
    await page.locator('.slds-icon-waffle').click();
    await page.getByText("View All",{exact:true}).click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder("Search apps or items...").fill("Accounts");
    await page.locator('//mark[text()="Accounts"]').click();

    //Creating new Account
    await page.getByRole("button",{name:"New", exact:true}).click();
    await page.locator('input[name="Name"]').fill("TestAccount");
    
    await page.getByRole("combobox",{name:"Rating",exact:true}).click();
    await page.getByText("Warm",{exact:true}).click();

    await page.getByRole("combobox",{name:"Type",exact:true}).click();
    await page.getByText("Prospect",{exact:true}).click();

    await page.getByRole("combobox",{name:"Industry",exact:true}).click();
    await page.getByText("Banking",{exact:true}).click();

    await page.getByRole("combobox",{name:"Ownership",exact:true}).click();
    await page.getByText("Public",{exact:true}).click();

    await page.getByRole("button",{name:"Save", exact:true}).click();

    //Assert the Account created
    await expect(page.locator('//span[contains(@class,"toastMessage")]')).toContainText("Account");

    //Upload files
    await page.getByRole("button",{name:"Upload Files", exact: true}).setInputFiles(path.join(__dirname,"../../../../Data/TestLeaf Logo.png"));

    //Click Done and assert the uploaded file
    await page.getByRole("button",{name:"Done", exact:true}).click();
    await expect(page.locator('//span[contains(@class,"toastMessage")]')).toHaveText("1 file was added to the Account.");
})