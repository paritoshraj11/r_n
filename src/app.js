const http = require("http");
const fs = require("fs");
const route = require("./route");

const PORT = 5000;

const server = http.createServer(route);

const listeningListener = () => {
  console.log(`:: server started to listen at port ${PORT}   `);
};

server.listen(PORT, listeningListener);
