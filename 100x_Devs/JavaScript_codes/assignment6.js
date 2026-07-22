// Write a function that takes a user as an input and greets them with their name and age

// Declaring functions
function greet(user){
    return ("Hi your name is "+ user.name + " and your age is "+ user.age);
}
// Declaring objects
let user={
    name:"Rishabh",
    age:20
}
let result=greet(user);
console.log(result);
//greet(user);