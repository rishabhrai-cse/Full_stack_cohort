// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se dikkat hoti hai kaibaar to usko  hatane ke liye iife ka use krte hai
//  jo function immediately execute ho jaaye
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // end krne ke liye semicolon is used

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')