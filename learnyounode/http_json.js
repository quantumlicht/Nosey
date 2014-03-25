var http = require('http')
var url = require('url')

function parsetime(time) {
	return {
		'hour': time.getHours(),
		'minute': time.getMinutes(),
		'second': time.getSeconds()
	}
}

function unixtime(time) {
	return {'unixtime': time.getTime()}
}

var server = http.createServer(function(req, res){
	if (req.method != 'GET')
		return res.end('send me a GET\n');

	
	var objUrl = url.parse(req.url, true)
	var time = Date(objUrl.query.iso)
	var result
	if (objUrl.pathname === '/api/parsetime')
		result = parsetime(time)		
	else if (objUrl.pathname === '/api/unixtime')
		result = unixtime(time)		
	
	if (result)
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(result));
	else{
		res.writeHead(404)
		res.end()
	}
});

server.listen(process.argv[2]);
