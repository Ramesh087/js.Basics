const userId ="ramesh" // we can't change the const variale in java script

let accountEmail = "ramesh@google.com"

var accountPassworfd = "21212121"

accontCity = "banglore"

console.log(accountEmail);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([userId , accountEmail,accountPassworfd,accontCity])// we use (table) this method for using repeatally the same log method

accountEmail = "ramesh.com"

accountPassworfd = "111111"

accontCity = "jaipur"

console.table([userId , accountEmail,accountPassworfd,accontCity])