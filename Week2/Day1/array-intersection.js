//function which accepting two arrays as parameters
function intersection(arr1, arr2){
//Declaring a third array to store the intersected array values
let intersectArray=[];
//Using nested for loop to check each and every of values of arr1 with arr2
for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
        //if the values of arr1 and arr2 are matching then the control will goes to if block
        if(arr1[i]===arr2[j]){
            //Making sure the value is not already available in intersectArray to avoid duplicate
            if(!(intersectArray.includes(arr2[j]))){
               
               //Inserting only the unique value in to the intersectArray
                intersectArray.push(arr2[j]);
            }
        }
        }
    }
//Once the nested for loop check is completed, the intersectArray will be returned 
// only if it contains atleast single value otherwise proper message will be logged
if(intersectArray.length===0){
    return "No matching values between the given two arrays"
}
else return intersectArray;
}

//Here the intersected array values ['3','4'] will be printed
console.log(intersection(["1","3","4","3"],["2","3","4","5"]));

//Here the intersected array values ['2'] will be printed
console.log(intersection(["1","2","1"],["2","2"]));

//No matching values
console.log(intersection(["1","2","3"],["4","5","6","7"]));

//Here the intersected array values ['a','b','c'] will be printed
console.log(intersection(["a","b","c"],["a","b","c"]));

//No matching values
console.log(intersection(["1","3","4"],["a","b","c"]));

