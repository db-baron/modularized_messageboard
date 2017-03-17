var mongoose = require('mongoose');
var users = require('./../controllers/users.js')
var messages = require('./../controllers/messages.js')

module.exports = function(app){
    app.get('/', function(req, res){
        users.index(req,res);
    });

    app.post('/users', function(req, res){
        users.new(req,res);
    })

    app.post('/messages/:id', function(req, res){
        users.new(req,res);
    });
};
