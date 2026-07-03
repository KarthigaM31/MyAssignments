//importing required libraries 
import{test, firefox, chromium} from "@playwright/test"

test("Launch Red Bus site in Edge browser", async () => {
    //Initializing a browser instance with Microsoft Edge
    const edgeBrowser = await chromium.launch({channel:"msedge"});
    const context1 = await edgeBrowser.newContext();
    const redbusPage = await context1.newPage();
    
    //Navigating to Red bus url in edge browser
    await redbusPage.goto("https://www.redbus.in");
    
    //Fetching the page title and printing
    const title1 = await redbusPage.title();
    console.log(`Red Bus website title is: ${title1}`);
    
    //Fetching the page url and printing
    const url1 = redbusPage.url();
    console.log(`Red Bus website URL is: ${url1}`);
})