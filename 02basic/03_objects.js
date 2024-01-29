//object ko two type se declare kar sakte h  literal and constructor 

//singelton == literal ki trah declare karte h to singleton nhi banta h
// object.create



// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Ramesh",
    [mySym] :"mykey1",// tyeof mysym is string not a symbol in this object  symbol me use karne ke liye "[]"isme likho
    "full name":"Ramesh P",
    age: 18,
    location: "jaipur",
    email : "ramesh@2003",
    isLoggedIn: false,
    lastlogindays : ["Monday", "Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);//we don't acess the full name from '.'
// console.log(jsUser[mySym]);// isme ese hi Acess kar sakte h
jsUser.email ="ramesgpoou@200"
//Object.freeze(jsUser)
//jsUser.email= "fyrhfhfxxfbcfg@55"// object is free we can't overrie the email
//console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello js user");
}
jsUser.greetingtwo = function() {
    console.log(`hello js user,${thos.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

