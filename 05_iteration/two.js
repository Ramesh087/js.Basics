// for of

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`${greet}`);
}


//maps //unic data save hota h 

const map = new Map()
map.set('IN',"india")
map.set('USA',"united state of America")
map.set('FR',"france")
map.set('IN',"india")


console.log(map);
 for (const [key,value] of map) {
    //console.log(key,':-',value);
 }

 const myObj ={
        'game1':'NFS',
        'game2':'spiderman'
 }

//  for (const [key,value] of myObj) {
//     console.log(key,':-',value);
//  }