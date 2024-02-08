const user ={
    username:"Ramesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="Ram"
// user.welcomeMessage()

//console.log(this);//current context is empty object {} //but in browser is give window object

// function chai() {
//     let usename ="Ramesh"
//     console.log(this.usename);// object me hi this.username use kar sakte h function me usee nhi kar sakte h answer undefined
// }

// chai()

// const chai =function () {
//     let usename ="ramesh"
//     console.log(this.username);   
// }

const chai = () => {
    let usename ="ramesh"
    console.log(this.username);   // undefinded aayega
    console.log(this);// empty object {}
}

//chai()

// const addTwo =(n1,n2)=>{
//     return n1+n2
// }//explicit return

//const addTwo =(n1,n2)=> n1+n2 //implixit return
//const addTwo =(n1,n2)=> (n1+n2)//implixit return
const addTwo =(n1,n2)=> ({username:"Ramesh"})//object ko { me rep karna hi padega}


console.log(addTwo(3,4));

// const myarray =[2,5,3,7,8]

// myarray.forEach()