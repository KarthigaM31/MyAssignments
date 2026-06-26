function launchBrowser(browserName)
{
    if(browserName==="chrome")
    {
        console.log("The browser name is "+browserName);
    }
    else
    {
         console.log(`The browser name is ${browserName} which is not chrome`);
    }
}

function runTests(testType)
{
    switch (testType) {
        case "smoke":
            console.log(testType);
            break;
        case "sanity":
            console.log(testType);
            break;
        case "regression":
            console.log(testType);
            break;
    
        default:
            console.log("smoke");
            break;
    }
}

launchBrowser("chrome");
launchBrowser("Edge");
runTests("smoke");
runTests("regression");
runTests("sanity");
runTests("integration");
