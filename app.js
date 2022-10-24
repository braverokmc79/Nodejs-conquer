const express = require("express");
const hbs = require("express-handlebars");
const server = express();


server.use(express.static(__dirname + "/public"));
server.set("view engine", "hbs");
server.engine(
    "hbs",
    hbs.engine({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials'
    }

    ));



server.get("/", (req, res) => {
    res.render("home", { message: "Hello from node.js", });
});


server.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
});