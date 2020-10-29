/*********************************************************************************
					H1Z1 (JUST SURVIVE) EMULATOR - ALPHA VERSION
 *********************************************************************************/

// Default "Lib"
var colors = require('colors/safe');

/* Customs Scripts */
var func = require('./Core/Functions');
var fserv = require('./Core/FakeServers');

/* App Arguments (app.js arg1 arg2 ...) */
var args = process.argv.slice(2);



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

	switch (args[0]) 
	{
		case 'LoginServer':
		    func.ReturnConsoleCommand("TEST",args[1]);
		    break;
		
		// DEBUG
		case 'test':

			fserv.CreateServer("off","GateWayServer","127.0.0.1", "20043");
			fserv.CreateServer("off","CDNAssets","127.0.0.1", "9769");
			fserv.CreateServer("off","StatusServ","127.0.0.1", "80");

			break;


		default:
		    func.ReturnConsoleCommand(colors.red("STARTED EMULATOR"),colors.white("Launching Emulator in Normal Mode"));
	}
}
InitEmu();