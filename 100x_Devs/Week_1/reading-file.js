const fs = require("fs");
//fs= File system  
const contents = fs.readFileSync("a.txt", "utf-8"); // bytes,hex (encoding) --> utf-8
console.log(contents);
