var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var scoreData = require('./scoreData.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ default: null}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.static('public'));

app.get('/:game', function(req, res, next){
	var game = req.params.game.toLowerCase();
	var gameData;
	if(game == "ta"){
		gameData = scoreData.ta;
		console.log("== Ta Data: ", gameData);
	}else if(game == "haw"){
		gameData = scoreData.haw;
		console.log("== Haw Data: ", gameData);
	}else{
		next();
	}
	res.status(200).sendFile(path.join(__dirname+'/'+game+'.html'));

});

app.post('/:game/addScore', function(req, res, next){
	console.log("== req.body: ", req.body);
	var game = req.params.game.toLowerCase();
	if(game == "ta" || game == "haw"){
		if (req.body && req.body.name && req.body.score){
			var scoreValues = req.body;
			res.status(200);
		}else{
			res.status(400).send("Request must have 'name' and 'score' values");
		}
	}else{
		res.status(404).send("Request must be one of the games");
	}
});


app.get('*', function(req, res){
	res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

app.listen(port, function() {
	console.log("== Server is listening on port", port);
});
