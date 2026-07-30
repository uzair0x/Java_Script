const user = {
    username: "uzair",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details form databse")
        console.log(this)
    }

}

console.log(user.username);
console.log(user.getUserDetails());