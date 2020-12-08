var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');



var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ default: null}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.static('public'));

app.get('/:game', function(req, res, next){
	var scoreData = require('./scoreData.json')
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
			//res.status(200).send("Successfully got score for "+ game + ": " + scoreValues.name + ", " + scoreValues.score);

			var response = storeScore(scoreValues, game);
			console.log("==Response: ", response);
			if (response == 200){
				res.status(200).send("Score stored successfully");
			}else{
				res.status(500).send("Error storing score");
			}

		}else{
			res.status(400).send("Request must have 'name' and 'score' values");
		}
	}else{
		res.status(404).send("Request must be one of the games");
	}
});


function storeScore(scoreValues, game){
	var scoreData = require('./scoreData.json')
	var gameData;
	if(game == "ta"){
		gameData = scoreData.ta;
	}else{
		gameData = scoreData.haw;
	}

	gameData.push({
		name: scoreValues.name,
		score: scoreValues.score
	});

	if(game == "ta"){
		scoreData.ta = gameData;
	}else{
		scoreData.haw = gameData;
	}

	console.log("Score data: ", scoreData);


	fs.writeFile(
		__dirname + '/scoreData.json',
		JSON.stringify(scoreData, null, 2),
		function (err, data) {
			if(err){
				console.log(" --err:", err);
				return 500;
			}
		}
	);
	return 200;
}


app.get('*', function(req, res){
	res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

app.listen(port, function() {
	console.log("== Server is listening on port", port);
});
