var dotCharCode = '.'.charCodeAt(),

process.stdin.on('data', function(buffer){
	for (var i = 0; i < buffer.length; i++) {
		if (buffer[i] === dotCharCode) buffer.write('!', i);
	}	
	console.log(buffer)
});