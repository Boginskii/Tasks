const fs = require("fs");
const readlineSync = require("readline-sync");
let nameStr = readlineSync.question("namber?\n> ");
let todos = JSON.parse(fs.readFileSync("todos.json"));
let namber = parseInt(nameStr);
if (todos.length < namber) {
    console.log("wrong number");
} else {
    todos.splice((namber-1));
} console.log("done!");
fs.writeFileSync("todos.json", JSON.stringify(todos));