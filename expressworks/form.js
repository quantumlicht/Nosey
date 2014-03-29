var express = require('express');
var path = require('path')
var app = express();
app.set('view engine', 'jade')
app.set('views', process.argv[3])

app.use(express.urlencoded())
app.get('/home', function(req, res){
	res.render('index', {date: new Date().toDateString()});
});


app.post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])