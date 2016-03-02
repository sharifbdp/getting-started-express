var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectID = Schema.ObjectId;
    
var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    last_login_date: {type: Date, default: Date.now},
    last_login_ip: String,
    status: Number,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User, ObjectID : ObjectID
};