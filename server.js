var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5878;

app.engine('handlebars', exphbs({ default: null}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));




app.listen(port, function() {
	console.log("== Server is listening on port", port);
});
