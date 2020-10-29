const http = require('http');
var colors = require('colors/safe');
var func = require('./Functions');

module.exports.CreateServer = CreateServer;

function CreateServer(s,fakename,ip,portx) 
{
	if(s == "on")
	{
		const hostname = ip;
		const port = portx;

		const server = http.createServer((req, res) => {
		  res.statusCode = 200;
		  // res.setHeader('Content-Type', 'text/plain');
		  // res.end('Hello World');
		});

		server.listen(port, hostname, () => {

			func.ReturnConsoleCommand("STARTING-TCP-SERVER","Started server : " + fakename +" ["+hostname+":"+port+"]");
		  	// console.log(colors.green('[ ! ] ')+ colors.white("Started FakeServer :" + fakename));
		});
	}	
}
