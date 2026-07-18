import {test,chromium,expect} from "@playwright/test"

test("Handling Dropdowns in PW", async({page})=>{
    //Navigating to leafground website
    await page.goto("https://leafground.com/select.xhtml");
   
    //Click on dropdown and selecting favorite UI automation tool using different select option (label and index)
    await page.selectOption('//select[@class="ui-selectonemenu"]',{label:"Selenium"});
    await page.selectOption('//select[@class="ui-selectonemenu"]',{index:3});
    
    //Get the count of the dropdown
    const toolsCount = await (page.locator('//option[@class="ui-selectonemenu-label"]').count())-1;
    console.log(`Total number of UI automation tools in the dropdown is: ${toolsCount}`);
    console.log("The values in the Favourite UI automation tool dropdowns are below:");    
    
    //Printing all the values of the dropdown
    for(let i = 0 ; i <= toolsCount ; i++ ){
        console.log(await page.selectOption('//select[@class="ui-selectonemenu"]',{index:i}));        
    }

    //Selecting a country from non select dropdown
    await page.locator('//label[contains(@id,"country_label")]').click();
    await page.getByRole("option",{name:"India"}).click();

    //Fetching the count of cities dropdown to make sure values are loaded after selecting a country
    await page.locator('//label[contains(@id,"city_label")]').click();
    const citiesCount = await (page.locator('//li[contains(@id,"city_")]').count())-1;
    if(citiesCount >= 1){
        console.log(`Upon selecting a country ${citiesCount} cities were loaded`);        
    }
    else{
        console.log(`No cities were loaded properly, count is ${citiesCount}`); 
    }

    //Choose any 3 courses from the dropdown
    await page.locator('//button[@aria-label="Show Options"]').click();  //Clicking dropdown
    await page.locator('//li[@data-item-value="AWS"]').click();

    await page.locator('//button[@aria-label="Show Options"]').click();  //Clicking dropdown
    await page.locator('//li[@data-item-value="PostMan"]').click();

    await page.locator('//button[@aria-label="Show Options"]').click();  //Clicking dropdown
    await page.locator('//li[@data-item-value="ReactJs"]').click();

    //Choose a language from non-select dropdown
    await page.locator('//label[contains(@id,"lang_label")]').click();
    await page.locator('//li[@data-label="Tamil"]').click(); //Select Tamil

    //Print all values from language dropdown
    const values = page.locator('//li[contains(@id,"lang_")]');
    const count = await values.count();
    console.log(`Language dropdown values count is: ${count}`);
    console.log("The values in the language dropdowns are below:");    
    
    for(let j = 0 ; j < count ; j++ ){
        console.log(await values.nth(j).innerText());
    }

    //Select 'Two' irrespective of the language chosen
    await page.locator('//div[contains(@class,"ui-selectonemenu-trigger")]').last().click();
    await page.locator('//li[contains(@id,"value_2")]').click();
    

    


    
    

})