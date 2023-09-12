
// =================================== FILES ==============================================

// const fs = require("fs");

// const Read = fs.readFileSync("file12txt");
// console.log("data of file 1 are: " + Read);

// fs.writeFileSync("file1.txt", "Hii yash i am callin you dude");
// console.log("the file has been written");

// fs.appendFileSync("file1.txt", " Suraj is the owner of the file");
// console.log("the file1 has been appende");

// fs.unlinkSync("file1.txt");
// console.log("the file has been deleted");



        //   ----------------------------------- DIRECTORY --------------------------------

const fs = require("fs");

// const makeDir = fs.mkdirSync("myDirectory");
const readDir = fs.readdirSync("myDirectory");
console.log("the data is: ",readDir)
// const deleteDir = fs.rmdirSync("myDirectory");
// const isDirPresent = fs.existsSync("myDirectory");
// console.log(isDirPresent);
// console.log("Directory has been deleted.");
