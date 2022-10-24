const fs = require("fs");

const data = fs.readFileSync("./vocab.json", { encoding: "utf-8" });
let arr = JSON.parse(data);
console.log(arr);

const ob = {
    name: "Daniel",
    age: 20,
    description: "I go to school.",
};

fs.writeFileSync("test.json", JSON.stringify(ob, null, 2));

