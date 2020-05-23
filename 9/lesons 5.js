const fs = require("fs");
const readlineSync = require("readline-sync");
let nameStr = readlineSync.question("todo?\n> ");
let newtodo = {
    title: nameStr,
    completed: false,
};
let todos = JSON.parse(fs.readFileSync("todos.json"));
        todos.push(newtodo); 
console.log("done!");
fs.writeFileSync("todos.json", JSON.stringify(todos));
