//falsy values 
//false , 0, -0, null, "", BigInt On ,NaN,undefined

//truthy values
//"0" , 'false', " " , [] , {}, function()

//check Array
// const userEmail=[]
// if (userEmail.length === 0 ){
//     console.log("Array is Empty");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     const newLocal = "Object is empty";
//     console.log(newLocal);
// }

//Nullish Coalesoing Operator(??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  
//val1 = undefined ?? 15
// val1 = null ? 10 ?? 10
// console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80")