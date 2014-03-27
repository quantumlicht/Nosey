process.stdin.once('data', function(buffer) {
	intArray = new Uint8Array(buffer);
	console.log(JSON.stringify(intArray));

});