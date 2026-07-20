const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // for each bolta hai ki callback function do
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// Array ke andar objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
 // Database se value fetch krne ke liye (database se array aata hai)
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )