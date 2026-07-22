// Create a function that takes an array of objects as input ,
// and returns the users whose age>18 and are male


function data(arr){


    // initialise a new array,push to a new array
let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i].gender==="male"&&arr[i].age>18){
        arr2.push(arr[i]);
    }
}
return arr2;

 // you can use filter function inside amd array
}

let user=[
{
    name:"Rishabh",
    age:21,
    gender:"male"
},
{
    name:"Aadvik",
    age:11,
    gender:"male"
},
{
    name:"Ritika",
    age:18,
    gender:"female"
},{
    name:"Rohan",
    age:21,
    gender:"male"
}
]

console.log(data(user));