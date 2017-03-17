var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({extended: false}));

// mongoose.connect('mongodb://localhost/message_board_db1');
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); // Pass app to the function assigned to module.exports in the routes.js file

app.listen(8700, function() {
    console.log("We listen on port 8700. Port 8700 4 Life!");
});
