const fs = require("fs");
const readlineSync = require("readline-sync");
let nameStr = readlineSync.question("todo?\n> ");
let newtodo = {
    title: nameStr,
    completed: false,
  };
  let todos = JSON.parse(fs.readFileSync("todos.json"));
  for (let i = 0; i < todos.length; ++i) {
    if (todos[i].title === newtodo)
{
    todos.push(newtodo);
 } console.log("done!");
}
fs.writeFileSync("todos.json", JSON.stringify(todos));
