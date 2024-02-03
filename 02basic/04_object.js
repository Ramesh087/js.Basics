//const tinderUser = new Object()  //singelton (constructor) object
const tinderUser ={}   //non singelton

tinderUser["id"]= "123abc"
tinderUser.name ="rames"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
email:"some@gmail.com",
fullname:{
    userfullname:{
        firstman:"ramesh",
        lastname:"pot"
     }
  }
}
 
// console.log(regularUser.fullname.userfullname.firstman);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 = {obj1,obj2}  // problem that give object ke andar object

// const obj3 = Object.assign({},obj1,obj2)//obj1 aand obj 2 copy in {}
 const obj3 ={...obj1,...obj2}// spread the objects

console.log(obj3);



// const users = {
//     {
//         id:1,
//         email:"r@gmail.com"
//     },
//     {
//         id:1,
//         email:"r@gmail.com"
//     },
//     {
//         id:1,
//         email:"r@gmail.com"
//     },
//     {
//         id:1,
//         email:"r@gmail.com"
//     },
// }


// user[1].email;


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));//datatype of keys is array


//======

// destructring
const course ={
  coursename : "js in hindi",
  price :"999",
  courseinstructor : "hitesh"
}
//course.courseinstructor

const { courseinstructor:instructor} =course

//console.log(courseinstructor);
console.log(instructor);


