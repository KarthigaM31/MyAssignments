//Task1: Function Declaration
function userProfile(name){
    console.log(`Hello, ${name}!`);    
}
userProfile("Karthiga");

//Task2: Arrow Function
let double = (number)=> number*2;
console.log(double(5));

//Task3: Anonymous Function
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
},2000);

//Task4: Callback Function
function getUserData(x){
    setTimeout(function(){
        x();
    },3000);
}
function callback(){
    console.log("Call Back Function");
    
}
getUserData(callback);
