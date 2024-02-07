// let a = 10
// const b=20
// var c=30
let a =30
if(true){
    let a = 10
    const b=20
    //var c=30
}

//console.log(a);
//console.log(b);
//console.log(c);


function one() {
    const username ="Ramesh"
    function two(){
        const website ="youtube"
    }
    //console.log(website);
    two()
}
//one()

//++++++++++++++++++++++++++interesting


function addone(num) {
    return num+1
}
addone(5)//isko kahi pe bhi rakh sakte h

const addtwo = function(num){
    return num+2
}

addtwo(5)//hoisting  //isko addtwo ke uper nhi rakh sakte acess nhi kar payega