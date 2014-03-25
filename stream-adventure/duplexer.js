var spawn = require('child_process').spawn;
var duplex = require('duplexer');
module.exports = function(cmd, args) {
	var proc = spawn(cmd,args)
	return duplex(proc.stdin, proc.stdout)
}