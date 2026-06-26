function stringReverse(inputString) 
{
    let characters = inputString.split("");
    let reversedString="";
    for(i=characters.length-1;i>=0;i--)
    {
        reversedString=reversedString+characters[i]; 
        
    }
    console.log(`The given string is "${inputString}", after reversal it is "${reversedString}"`);
    if(inputString===reversedString)
    {
        console.log(`The given string "${inputString}" is a palindrome`);    
        return true;    
    }
    else{
        console.log(`The given string "${inputString}" is not a palindrome`);
        return false;
    }
}

console.log(stringReverse("test leaf"));
console.log(stringReverse("dad"));
