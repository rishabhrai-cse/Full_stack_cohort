// {} -->> Known as scope
//var c = 300  // Global scope
let a = 300
if (true) {
    let a = 10 // Block scope
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "rishabh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // out of scope isliye error dega

     two()

}

// one()

if (true) {
    const username = "rishabh"
    if (username === "rishabh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // error dega kyuki store bhi kr rhe hai (declare krke variable me store bhi kr rhe hai)
const addTwo = function(num){
    return num + 2
}