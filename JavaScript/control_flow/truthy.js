const userEmail = []
// const userEmail=""   -->> It is assumed that it is falsy value.  or   const userEmail="rishabh@.com"   // -->> It is assumed that they are truthy values.
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}  // empty object

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null,undefined

let val1;   
// val1 = 5 ?? 10    // used in database(null value aai hai to uska saftey check kr dega)
// val1 = null ?? 10  // ouput=10
// val1 = undefined ?? 15  // output=15
val1 = null ?? 10 ?? 20  // output=10
console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")