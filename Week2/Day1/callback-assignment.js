let browser = "Chrome";
//Main function declaration with parameter as callback function name
function checkBrowserVersion(x){
//using setTimeout to wait for 2 secs before calling the callback function
    setTimeout(function(){
        x(browser);
    },2000);
}
//Callback function declaration with parameter as browser name
function callback(browserName){
    console.log(`The browser version is ${browserName} 107`);    
}

//calling the Main function by passing Callback function as parameter
checkBrowserVersion(callback);