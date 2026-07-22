// These are I/O bound task.
const fs = require("fs");
//fs= File system  
const contents1 = fs.readFileSync("a.txt", "utf-8"); // bytes,hex (encoding) --> utf-8
console.log(contents1);
const contents2 = fs.readFileSync("b.txt", "utf-8"); // read file synchronously
console.log(contents2);
// This code is synchronous code.

// fs.readFile --> read file asynchronously.
