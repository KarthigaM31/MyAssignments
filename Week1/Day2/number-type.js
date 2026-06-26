function numberType(num){
    let stringValue=" ";    
    if(num>0)
    {
        stringValue=`The given number ${num} is a positive number`; 
    }
    else if(num<0)
    {
        stringValue=`The given number ${num} is a negative number`;  
    }
     else if(num===0)
    {
        stringValue=`The given number ${num} is a neutral number`; 
    }
    else
    {
        stringValue=`The given input ${num} is invalid which is of datatype ${typeof num}`;
    }
  
    return stringValue;
}
console.log(numberType(10));
console.log(numberType(-4));
console.log(numberType(0));
console.log(numberType("0"));
