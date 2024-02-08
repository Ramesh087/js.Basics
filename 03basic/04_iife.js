//Immeditely Invoked Function Expressions (IIFE)
// global scope ke karan pollution hota h uska illaj h iife

(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();// do iife sath me likhe to semicolon lagate h

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("ramesh")

