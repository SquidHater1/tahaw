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
	var game = req.params.game.toLowerCase();
	if(game == "ta" || game == "haw"){
		console.log("== Game Requested: ", game);
		res.status(200).sendFile(path.join(__dirname+'/'+game+'.html'));
	}else{
		next();
	}
});

app.get('*', function(req, res){
	res.status(404).sendFile(path.join(__dirname + '/404.html'));
});

app.listen(port, function() {
	console.log("== Server is listening on port", port);
});
