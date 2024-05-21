const express = require("express");

const server = express();

const port = 12073;

server.use(express.urlencoded({ extended: true }));

let fun = function(request, response) {
    response.sendFile(__dirname + "/html/index.html");
};
let funObavijest1 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/oba.html");
};
let funObavijest2 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/obb.html");
};
let funObavijest3 = function(request, response) {
    response.sendFile(__dirname + "/html/saznajVise/obc.html");
};
let funDokumentacija = function(request, response) {
    response.sendFile(__dirname + "/html/dokumentacija.html");
};
let funGalerija = function(request, response) {
    response.sendFile(__dirname + "/html/galerijaSlika.html");
};
let funAutor = function(request, response) {
    response.sendFile(__dirname + "/html/oAutoru.html");
};
let funObrasci = function(request, response) {
    response.sendFile(__dirname + "/html/fra.html");
};
let funIzlozba = function(request, response) {
    response.sendFile(__dirname + "/html/frb.html");
};
let funTablica = function(request, response) {
    response.sendFile(__dirname + "/html/tablica.html");
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
server.get('/oba', funObavijest1);
server.get('/obb', funObavijest2);
server.get('/obc', funObavijest3);
server.get('/dok', funDokumentacija);
server.get('/fra', funObrasci);
server.get('/frb', funIzlozba);
server.get('/gal', funGalerija);
server.get('/oau', funAutor);
server.get('/tab', funTablica);
server.use("/css", express.static("./css"));
server.use("/jsk", express.static("./js/klijent"));
server.use("/slike", express.static("./resursi/slike"));

server.listen(port, () => {
    http = "http://localhost:";
    console.log('Express server pokrenut na: ' + http + port);
})