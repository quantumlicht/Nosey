var crypto = require('crypto'),
	zlib = require('zlib'),
	tar = require('tar'),
	through = require('through'),
	parser = tar.Parse();


function onEntry(entry) {
	if(entry.type !== 'File') {
		return;
	}

	function write(data) {
		this.queue(data.toString() + ' ' + entry.path + '\n');
	}
	
	entry
		.pipe(crypto.createHash('md5', {encoding: 'hex'}))
		.pipe(through(write))
		.pipe(process.stdout)

}


parser.on('entry', onEntry);

var cipher = process.argv[2],
	pass = process.argv[3];

process.stdin
	.pipe(crypto.createDecipher(cipher, pass))
	.pipe(zlib.createGunzip())
	.pipe(parser);