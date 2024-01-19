// primitive

// 7 types : String , Number, Boolean,null,undefined,symbol,BigInt




// reference(non primitive)

// Array,Objects,Function
const heros = [ "shaktiman","nagraj", "doga"];
let myobj ={
    name: "ramesh",
    age:20,
}

const myfunc =function(){
    console.log("hello ramesh");
}



// ++++++++++++++++++++++++++++++++++++++++++

// memory
//stack(primitivte type data)  ....... in stack memory we get copy of data
// heap( non primitive)       ......... in heap memeory we get references of data



// stack example
let userid = "ramesh@gmail.com"
let rough = userid
//console.log(rough)
 
rough="thg@gmail.com"
console.log(userid)
console.log(rough)



// heap example
let userone={
    email:"ramesh@gmail.com",
    mob:2222,
}



let usertwo = userone
console.log(usertwo.email)
usertwo.email = "potliy@gmail.com"

console.log(userone.email)
console.log(usertwo.email)