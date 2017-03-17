var mongoose = require('mongoose');
var User = mongoose.model('User');
var Messages = mongoose.model('Message');

module.exports = (function(){
    return {
        new: function(req, res){
            var new_message = new Message(req.body);
            User.findOne({_id: req.params.id}, function(err, users){
                if(err){
                    console.log(err);
                } else {
                    console.log(user);
                    users.messages.push(new_message);
                    new_message._user = user;
                    // users.save(function(err, results){
                    new_message.save(function(err){
                        if(err){
                            console.log("Got an error");
                        } else {
                            user.save(function(err){
                                if(err){
                                    console.log("err");
                                } else {
                                    res.redirect('/');
                                }
                            })
                        }
                    })
                }}
            )
        },
    }
})();
