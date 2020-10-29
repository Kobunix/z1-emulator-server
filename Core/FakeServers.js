const http = require('http');

function CreateServer(fakename,ip,portx) 
{
	const hostname = ip;
	const port = portx;

	const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  // res.setHeader('Content-Type', 'text/plain');
	  // res.end('Hello World');
	});

	server.listen(port, hostname, () => {
	  console.log("[ ! ] Started FakeServer : "+ fakename);
	});
} 


CreateServer("LoginServer","127.0.0.1", "20042");
CreateServer("GateWayServer","127.0.0.1", "20043");