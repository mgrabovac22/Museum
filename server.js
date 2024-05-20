const express = require("express");

const server = express();

const port = 12073;

let fun = function(request, response) {
    response.send('Hello world');
};
  
server.get('/', fun);

server.listen(port, () => {
    http = "http://localhost:";
    console.log('Express server pokrenut na: ' + http + port);
})