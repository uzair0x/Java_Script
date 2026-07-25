function sayMyName(){
    console.log("U");
    console.log("Z");
    console.log("A");
    console.log("I");
    console.log("R");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

//addTwoNumbers(3,"a");


function addTwoNumbers(number1,number2){
    let result=(number1 + number2);
    return result
}

const result = addTwoNumbers(3,8)

//console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("uzair"))
//console.log(loginUserMessage()) 

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,500,600))


// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,500,600))


const user = {
    username: "uzair",
    price: 1000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user)