var express = require('express');
var path = require('path')
var app = express();
// app.set('view engine', 'jade')
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
// app.use(require('stylus').middleware(process.argv[3]|| __dirname + '/public'))

app.put('/message/:id', function(req, res){

	res.end( require('crypto')
   .createHash('sha1')
   .update(new Date().toDateString().toString() + req.params.id)
   .digest('hex')
	);
});
app.listen(process.argv[2])

