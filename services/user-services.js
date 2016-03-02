var User = require('../models/user').User;

//var ObjectID = new ObjectID();

exports.addUser = function (user, next) {

    var newUser = new User({
        name: user.name,
        username: user.username,
        password: user.password,
        last_login_ip: '192.168.1.1',
        status: user.status
    });

    newUser.save(function (err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};

exports.getAllData = function (next) {
    User.find({}, function (err, lists) {
        if (err) {
            return next(err);
        }
        next(null, lists);
    });
};

exports.findUser = function (id, next) {
    User.findOne({'_id': id}, function (err, user) {
        if (err) {
            return next(err);
        }
        next(null, user);
    });
};

exports.updateData = function (id, data, next) {
    
    User.update({'_id': id}, data, {safe: true}, function (err) {
        if (err) {
            console.log('Error updating wine: ' + err);
            return next(err);
        } else {
            console.log('document(s) updated');
            next(null);
        }
    });
};
