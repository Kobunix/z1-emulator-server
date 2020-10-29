/*********************************************************************************
					H1Z1 (JUST SURVIVE) EMULATOR - ALPHA VERSION
 *********************************************************************************/


/* ALL NEEDED REQUIRES */
// const args = require('minimist')(process.argv.slice(2));
var colors = require('colors/safe');

/* Included Scripts */
var func = require('./Core/Functions');
require('./Core/FakeServers');

	// NOTES : 
		// fservers.CreateServer("LoginServer","127.0.0.1", "20042");
		// CreateServer("GateWayServer","127.0.0.1", "20043");


/* APP START */
function InitEmu()
{
	// Make here all logic
	console.log(" ");
	console.log(colors.rainbow('=================================================================='));
	console.log(colors.white('		  H1Z1 (JUST SURVIVE) EMULATOR'));
	console.log(colors.rainbow('=================================================================='));
	console.log(" ");

	func.ReturnConsoleCommand("testlab","textcontent");
	func.test();

}

InitEmu();