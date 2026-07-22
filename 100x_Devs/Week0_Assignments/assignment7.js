//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user){
    let title="";
    // Convert gender to lowercase to make the check case-insensitive
    let gender = user.gender.toLowerCase();
    if (gender==="male"){
        title="Mr";
    }else if(gender==="female"){
        title="Mrs";
    }else{
        title="Others";
    }
    console.log("Hi your name is " + user.name+" and your age is "+ user.age);
}
let user={
    name:"Rishabh",
    age:21,
    gender:"Male"
}
greet(user);