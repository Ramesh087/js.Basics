const marvelheros =["ironman","spiderman","captain america"]
const dcheros = ["flash","superman","supergirl"]

// console.log(marvelheros.push(dcheros))
// console.log(marvelheros)
 const newmix = marvelheros.concat(dcheros)

console.log(newmix)

const all_new =[...marvelheros,...dcheros]//same as concat method
const anotther_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarray = anotther_array.flat(Infinity)
console.log(realanotherarray)







console.log(Array.isArray("Ramesh"))
console.log(Array.from("Ramesh"))
console.log(Array.from({name: "Ramesh"}))//intersting give blank array


let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))