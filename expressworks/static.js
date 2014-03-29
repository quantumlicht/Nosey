var express = require('express');
var path = require('path')
var app = express();
app.set('view engine', 'jade')
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3]|| __dirname + '/public'))
app.get('/home', function(req, res){
	res.render('index');
});
app.listen(process.argv[2])

