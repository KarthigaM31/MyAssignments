//Defining a function 
function fibonacci(n:number) : number
{
    if(n>=0)
    {
        //Initializing the variables
        let num1 = 0;
        let num2 = 1;
        let result = 0;
        if(n === 0 || n === 1) return n;
          
        for(let i = 2 ; i <= n ; i++)
         {            
            result = num1 + num2;
            num1 = num2;
            num2 = result;
         }
    //return the nth fibonaaci of the given positive number
    return result;
    }
    //Throw Error when negative number is passed
    else throw new Error(`Fibonacci is not applicable for a negative integer: ${n}`);    
}
//Function declaration with different types of values
//Using try catch to handle th error that we are throwing for negative integer
try{
    console.log(`The fibonacci of 5 is ${fibonacci(5)}`);
    console.log(`The fibonacci of 2 is ${fibonacci(2)}`);
    console.log(`The fibonacci of 0 is ${fibonacci(0)}`);
    console.log(`The fibonacci of 1 is ${fibonacci(1)}`);
    console.log(`The fibonacci of 3 is ${fibonacci(3)}`);
    console.log(fibonacci(-8));
}
catch(error){
    console.log((error as Error).message);
    
}

