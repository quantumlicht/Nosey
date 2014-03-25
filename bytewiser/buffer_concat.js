var list_buffers = [];

process.stdin.on('data', function(buffer) {
	list_buffers.push(buffer);
});

process.stdin.on('end', function(){
	console.log(Buffer.concat(list_buffers))
})
