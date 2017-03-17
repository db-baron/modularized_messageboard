var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    age: Number,
    messages: [{type: Schema.Types.ObjectId, ref: 'User'}] // References the data in the Comment model
});

var User = mongoose.model("User", UserSchema);
