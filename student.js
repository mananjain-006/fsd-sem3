const fs=require("fs")

fs.writFile("student.txt","Name:rahul\nRoll no:101");
console.log("File created successfully");
let data = fs.readFile("student.txt","utf8");
console.log("\nFile content:");
console.log(data);
fs.appendFile("student.txt", "\nCourse:B.tch CSE");
console.log("\n File updated successfully");