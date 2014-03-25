var http = require('http');
var bl = require('bl');

var count = 0;
var results = [];

function getHttp(idx){
	http.get(process.argv[2+i], function(response){
		response.pipe(bl(function(err, data){
			if (err)
				return console.error(err)
			results[idx] = data.toString();
			count++;
			if (count==3)
				printResults(results);
		}));
	})
}


function printResults(results) {
	for (var i=0; i< results.length; i++)
		console.log(results[i]);
}


for (var i=0; i< 3; i++) {
	getHttp(i);
}
