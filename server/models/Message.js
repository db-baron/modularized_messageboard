var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}  // References the data in the User model
});

var Message = mongoose.model("Message", MessageSchema);
