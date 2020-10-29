var Functions = require('./Core/Functions.js');
var FServers = require('./Core/FakeServers.js');

const http = require('http');


/* Variables */
const hostname = '127.0.0.1';
const port = 3000;


// HTTP SERVER - TO EMULATE EVERY SOE SERVERS - Need opti
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});