const fs = require("fs");
const readlineSync = require("readline-sync");
let todos = JSON.parse(fs.readFileSync("todos.json"));
let x = 0;
for (let i = 0; i < todos.length; ++i) {
    if (todos[i].completed === true) {
        todos.splice(i, 1);
        x=x+1; 
    } 
} console.log(x+" "+"todos removed");
fs.writeFileSync("todos.json", JSON.stringify(todos));

