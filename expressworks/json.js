var express = require('express');
var fs = require('fs')
var app = express();

app.get('/books', function(req, res){
	fs.readFile(process.argv[3], function(err, data){
		if (err) return res.send(500);
		try {
			books = JSON.parse(data);''
		}
		catch(e){
			res.send(500)
		}
		res.json(books)

	})
});
app.listen(process.argv[2])

