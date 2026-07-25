const user = {
    username: "uzair",
    price: 999,
    
    WelcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}

// user.WelcomeMessage()
// user.username = "wick"
// user.WelcomeMessage()

// console.log(this);

// function cape(){
//     let username = "uzair"
// //      console.log(this.username);
// }
// //                cape()

// Function cape() =>  {
//     let username = "uzair"
//      console.log(this.username);
// }

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"uzair"})

console.log(addTwo(8,8))