var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res){
	
	fs.readFile(process.argv[3], 'utf8', function callback(err, data){
		
		if (err){
			return res.sendStatus(500)
		}
		try {
			var books = JSON.parse(data)
		} catch (e){
			res.sendStatus(500)
		}

		res.json(books)
	
	})
})

app.listen(process.argv[2])