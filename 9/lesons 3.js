const fs = require("fs");
let todos = JSON.parse(fs.readFileSync("todos.json"));
for (let i = 0; i < todos.length; ++i) {
if (todos[i].completed === false)
{
console.log ((i+1)+". " + todos[i].title);
}
}
