var through = require('through');


var write = function(buf) { 
	var res = buf.toString()+'A'
	this.queue(res);
}

var end = function() { console.log('hsddjkhsdjkj') }

var tr =  through(function write(buf){
		this.queue(buf.toString().toUpperCase())
	})

process.stdin.pipe(tr).pipe(process.stdout);
