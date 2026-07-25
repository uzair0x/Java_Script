    var c = 30

if(true){
    let a = 10
    const b = 20
    // console.log("INNER:",a);
}
// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "uzair"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);           
    two()

}

one()

if(true){
    const username = "uzair"
    if(username=== "uzair"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5))



addTwo(4)
const addTwo = function(num){
    return num +2
}

// console.log();