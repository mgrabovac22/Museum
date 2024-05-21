const express = require("express");

const server = express();

const port = 12073;

let fun = function(request, response) {
    response.sendFile(__dirname + "/html/index.html");
};
let funCSS = function(request, response) {
    response.sendFile(__dirname + "/css");
};
let funJS = function(request, response) {
    response.sendFile(__dirname + "/jsk");
};
let funSlike = function(request, response) {
    response.sendFile(__dirname + "/slike");
};

server.get('/', fun);
server.use("/css", express.static("./css"));
server.use("/jsk", express.static("./js/klijent"));
server.use("/slike", express.static("./resursi/slike"));

server.listen(port, () => {
    http = "http://localhost:";
    console.log('Express server pokrenut na: ' + http + port);
})