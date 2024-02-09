const userEmail = "h@ramesh.ai"

if(userEmail){
    
    console.log("got email");
}

else{
    console.log("don't hane email");
}


// falsy values 
//false , 0, -0,BigInt 0n,"",null,undefined,NaN

//truthy values 
// "0",'false'," ",[],{}, function(){}

const array = []
// if (array.length === 0) {
//      console.log("array is empty");
// }

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object iis empty");
}

// Nullish Coalescing Operator(??): null undefined

let val1 ;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val = null ?? 10 ?? 20 


console.log(val1);


// terniary Operator

// condition ? true : false 

const iceteaprice = 100 
iceteaprice >= 80 ? console.log("less than 80") : console.log("more than 80");