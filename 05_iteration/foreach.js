const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);})

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// }
// )

const mycoding = [
    {
    languagename:"javascript",
    languageFile: "js"
    },
    {
        languagename:"javascript",
        languageFile: "js"
    },
    {
            languagename:"javascript",
            languageFile : "js"
    },
                
]

mycoding.forEach((item) => {
    console.log(item.languageFile);
});