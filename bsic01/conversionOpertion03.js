let score = "33abc"

console.log(typeof score);

console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber);//NaN "not a number" special type when converted value are not number
// "33" => 33
//true => 1;false => 0
// if we have null/undefinded at 3abc we get 0/NaN

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(isLoggedIn);

// 1 => true ; 0=> false
// ""=> false
// "hitesh" => true


let someNumber =33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log( typeof stringNumber);