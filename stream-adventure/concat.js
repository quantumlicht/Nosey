var concat = require('concat-stream')

var conc = concat(function(data){
	var data = data.toString();
	var tR = [];
	var str = data.split('')
	for (var i = str.length-1; i>=0; i--) {
		tR.push(str[i])
	}
	console.log(tR.join(''))

})

process.stdin.pipe(conc)


