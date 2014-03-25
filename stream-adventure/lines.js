var split = require('split');
var through = require('through')

var count = 0;
var tr = through(function(line){
	// console.log(count)
	this.queue(count%2===0
		?line.toString().toLowerCase() + '\n'
		:line.toString().toUpperCase() + '\n'
	);
	count++;
}) 
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)