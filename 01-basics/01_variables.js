const accountId = 144553
let accountEmail = "hello@gmail.com";
var accountpassword = "12345";
let accountState;

// posibilities to declare variable like this also..
accountCity = "Jaipur";

// accountId = 2 //not allowed
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

accountEmail = "hi@gmail.com";
accountpassword = "1212";
accountCity = "Mumbai";
console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountCity, accountState]);
