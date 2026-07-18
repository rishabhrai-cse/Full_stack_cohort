// const tinderUser = new Object() -->> singleton objects
const tinderUser = {} // empty objects -->> not a singleton objects

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {  // objects ke andar objects (nested objects)
        userfullname: {
            firstname: "rishabh",
            lastname: "rai"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // same in array
// const obj3 = Object.assign({}, obj1, obj2, obj4) // merging of objects -->> {} used as target 

const obj3 = {...obj1, ...obj2}   //spread operator(latest method)
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]   // value from database (array of objects,csv)

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// De-structure of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rishabh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor); // de-structure of objects


//  JSON (API)

// {
//     "name": "rishabh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API in the form of array

[
    {},
    {},
    {}
]