const accountId = 112233
let   accountEmail = "uzair@khan.com"
var   accountPassword = "12345"
accountCity = "Karachi"
let accountState;


accountEmail = "ab@cd.com"
accountPassword = "54321"
accountCity = "Lahore"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])