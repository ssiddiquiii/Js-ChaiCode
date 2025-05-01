const accountId = 112233
let accountEmail = "ssiddiqui@google.com"
var accountPassword = "12345"
accountCity = "karachi"

// accountId = 2 // not allowed
accountEmail = "ss@ss.com"
accountPassword = "12121"
accountCity = "Lahore"
let accountState;

/*
Prefer not to use var because of issue in 
block scope and functional scope
*/

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
