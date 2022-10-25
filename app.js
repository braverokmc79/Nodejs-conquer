const express = require("express");
const hbs = require("express-handlebars");
const words = require("./db/words.json");
const bodyParser = require("body-parser");
const server = express();




server.use(express.static(__dirname + "/public"));
server.set("view engine", "hbs");
server.engine(
    "hbs",
    hbs.engine({
        extname: 'hbs',
        defaultLayout: 'layout',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials/'
    }

    ));

server.use(bodyParser.urlencoded({ extended: false }))


server.get("/", (req, res) => {
    res.render("home", { words });
});

server.post("/", (req, res) => {
    const { query } = req.body;
    const wordsFilter = words.filter((w) =>
        w.word.toLowerCase().includes(query.toLowerCase())
    );

    res.render("home", { words: wordsFilter });
});

server.delete("/", (req, res) => {
    let { word } = req.body;
    word = words.filter((w) => !(w.word === word));
})

server.get("/add", (req, res) => {
    res.render("add");
});
server.get("/quiz", (req, res) => {
    res.render("quiz");
});


server.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
});