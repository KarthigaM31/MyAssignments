//Defining a function 
function factorial(n:number) : number
{
    if(n>=0)
    {
        //Initializing a result variable
        let result = 1;
          
        for(let i = 2 ; i <= n ; i++)
         {
             result = result*i;
         }
    //return the factorial of given positive number
    return result;
    }
    //Throw Error when negative number is passed
    else throw new Error(`Factorial is not defined for a negative integer: ${n}`);    
}
//Function declaration with different types of values
//Using try catch to handle th error that we are throwing for negative integer
try{
    console.log(`The factorial of 5 is ${factorial(5)}`);
    console.log(`The factorial of 2 is ${factorial(2)}`);
    console.log(`The factorial of 0 is ${factorial(0)}`);
    console.log(`The factorial of 1 is ${factorial(1)}`);
    console.log(`The factorial of 3 is ${factorial(3)}`);
    console.log(factorial(-5));
}
catch(error){
    console.log((error as Error).message);
    
}

