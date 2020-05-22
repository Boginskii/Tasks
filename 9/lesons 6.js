const fs = require("fs");
const readlineSync = require("readline-sync");
let nameStr = readlineSync.question("namber?\n> ");
let books = JSON.parse(fs.readFileSync("books.json"));
for (let i = 0; i < books.length; ++i) {
if (i===nameStr && completed === false) {
completed = true;
} console.log("[x]"+i+". "+todos.title+"\n");
if (i===nameStr && completed === true) {
completed = false;
}
if (i!==nameStr) console.log("wrong number");
}
fs.writeFileSync("todos.json", JSON.stringify(todos));