// if
// const isuserLOggedIn = true
// const temprature = 41
// if(temprature<50){
//    console.log("less than 50");
// }
// else
// {console.log("temprture is greater than 50 ");}


console.log("execute");
// <,>,<=,>=,==,===,!==

// const score =200

// if (score>100) {
//     const power ="fly"
//     console.log(`user power:${power}`);
// }

//console.log(`user power:${power}`);// scope error


const balance = 1000

//if (balance>500) console.log("test");

// if (balance<500) {
//     console.log("less than 500");

// }
// else if(balance<750){
//     console.log("less than 750");

// }

// else{
//     console.log("less than 1100");

// }

const isuserLOggedIn = true
const debitcard = true
const loggedinfromemail = true
const loggedinfromgoogle = true

if (isuserLOggedIn && debitcard) {
    console.log("allow to buy");
}

if (loggedinfromgoogle || loggedinfromemail) {
    console.log("user logged in");
}