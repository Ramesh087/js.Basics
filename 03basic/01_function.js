function saymyname (){
    console.log("R");
    console.log("a");
    console.log("m");
    console.log("e");
    console.log("s");
    console.log("h");
}

//saymyname()

function addTwonumbers(number1,number2){//function ke ander ke number1 and number 2 parameters khlate h
    console.log(number1+number2); 
}
 
addTwonumbers(3,null)//call karte time value ko argument bolte h
// string output 3

function addtwonum(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

const result = addtwonum(3,5)
//console.log(result);
 
function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Ramesh"));




function calculatePrice(val1,val2,...num1) {
    return num1// in num1 we get [500,2000,5000] 
}

//console.log(calculatePrice(200,400,500,2000,5000));


const user ={
    username:"ramesh",
    price:199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    usrname:"sam",
    price: 199
})


const mynewarray =[200,400,100,600]

function returnSecondvalue(getArray) {
    return getArray[2]
    
}

//console.log(returnSecondvalue(mynewarray));

console.log(returnSecondvalue([200,400,500,1000]));