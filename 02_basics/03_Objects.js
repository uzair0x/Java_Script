 // sigleton
// Object.create



//Object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Ali",
    "full name" : "Ali Khan",
    [mySym]: "mykey1",
    age: 18,
    location: "Pakistan",
    email: "ali@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Wednesday", "Friday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// Object.freeze(JsUser)
JsUser.email = "alikhan@gamil.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hellow Js users, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());