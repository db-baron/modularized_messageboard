var mongoose = require('mongoose');
var User = mongoose.model('User');
var Messages = mongoose.model('Message');

var users = {}; // our controller

users.index = function(req,res){
    // Populate messages (an attribute defined message in UserSchema). It's a little weird because messages itself has info about what model it's coming from
    User.find({}).populate('messages').exec(function(err, users){
        if(err){
            console.log(err);
        } else {
        res.render('index', {users : users});
        }
    })
}

users.new = function(req,res){
    var new_user = new User(req.body);  // This new User will have a new MongoID that' you'll automatically have stored in  new_user
    console.log("^"*25, new_user);
    new_user.save(function(err, results){
        if (err){
            console.log(err);
            console.log("Something broke");
        }
        else{
            res.redirect('/');
        }
    })
}


module.exports = users;
