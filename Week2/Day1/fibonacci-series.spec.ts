function fibonacci(n: number){
  if(n < 0){
    return `The given number "${n}" is invalid for Fibonacci series`;
  }
   else if(n === 0){
    return `The value of 0th Fibonacci number is "0"`;
   }
   else if(n === 1){
    return `The value of 1st Fibonacci number is "1"`;
   }
   else {
    let firstNum = 0;
    let secondNum = 1;
    let nextNum = 0;
    //logic to generate nth fibonacci number by iteratively updating 
    // the previous two fibonacci numbers
    for(let i = 2; i <= n; i++)    
    {
        nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;        
    }
    return `The value of ${n}th Fibonacci number is "${nextNum}"`;
   }   
}

console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));
console.log(fibonacci(-1));
