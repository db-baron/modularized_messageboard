var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/example_db');
console.log("Databse file loaded!");
var models_path = __dirname + '/../models';

// Gets all of our model files from the models dir
// fs.readdirSync(models_path).forEach means go to the models_path folder and
// iterate through each file there while running a callback function and require them if they're a .js
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') > 0){
        require(models_path + '/' + file);
    }
}) // note that this 'for' loop runs only once when the server starts
