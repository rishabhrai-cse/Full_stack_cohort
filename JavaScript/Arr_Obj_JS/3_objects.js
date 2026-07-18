// singleton // apne tarah ka ek hi objects
// Object.create // constructor  method

// object literals // objects ko declare karne ka tareeka.

const mySym = Symbol("key1") // declaring symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Rishabh Rai", // isko dot se access nhi kar paayenge isliye square bracket use hoga.
    [mySym]: "mykey1", // symbol is used as key
    age: 18,
    location: "Haridwar",
    email: "Rishabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // for accesing
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  // for symbol  (interview)

JsUser.email = "rishabh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rishabh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // string interpolation -->> same object ko reference krna hai to use kro this keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());