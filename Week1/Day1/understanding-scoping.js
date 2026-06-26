genderType="female";

function printGender(){
    let color="brown";
    if(genderType=="female"){
        var age=30;
        let color="pink";
        console.log(color);        
    }
    console.log(age);
    
}

printGender();
console.log(genderType);

genderType="male";
printGender();
console.log(genderType);

