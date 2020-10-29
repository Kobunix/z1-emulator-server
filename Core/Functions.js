var colors = require('colors/safe');


function ReturnConsoleCommand(label,message)
{
	console.log(colors.white('['+label+'] ') + colors.white(message));
}