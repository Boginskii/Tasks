const fs = require("fs");
const todos = [
{
title: "feed cat",
completed: true,
},
{
title: "buy products",
completed: false,
},
{
title: "watch TV",
completed: false,
},
];
fs.writeFileSync("todos.json", JSON.stringify(todos));