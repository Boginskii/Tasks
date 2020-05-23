const fs = require("fs");
const readlineSync = require("readline-sync");
let nameStr = readlineSync.question("namber?\n> ");
let todos = JSON.parse(fs.readFileSync("todos.json"));
let namber = parseInt(nameStr);
if (todos.length < namber) {
    console.log("wrong number");
} else {
    todos[namber-1].completed=!todos[namber-1].completed;
    if (todos[namber-1].completed===false){
    console.log("[ ]" + (namber) + ". " + todos[namber-1].title + "\n")
    }
    else {
        console.log("[x]" + (namber) + ". " + todos[namber-1].title + "\n")
    }
    // for (let i = 0; i < todos.length; ++i) {
    //     if (i === (namber - 1) && todos[i].completed === false) {
    //         todos[i].completed = true;
    //         console.log("[x]" + (i + 1) + ". " + todos[i].title + "\n");
    //     }
    //     else if (i === (namber - 1) && todos[i].completed === true) {
    //         todos[i].completed = false;
    //         console.log("[ ]" + (i + 1) + ". " + todos[i].title + "\n");
    //     }
    // }
}
fs.writeFileSync("todos.json", JSON.stringify(todos));