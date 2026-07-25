const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "wick"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "wick@gmail.com",
    fullname: {
        userfullname: {
            firstname: "wick",
            lastname: "stain"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    { name: "frank", email: "frank@gmail.com" },
    { name: "khan", email: "khan@gmail.com" },
    { name: "sundar", email: "sundar@gmail.com" }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in urdu ",
    price: "30K",
    courseInstructor:  "uzair"

}

//course.courseInstructor

const {courseInstructor : instructor } = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"uziar",
//     "coursename": "js in urdu",
//     "price": "free"

// }

