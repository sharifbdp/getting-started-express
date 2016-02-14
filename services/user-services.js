var User = require('../models/user').User;

exports.addUser = function (user, next) {

    var newUser = new User({
        name: user.name,
        username: user.username,
        password: user.password,
        last_login_ip: '192.168.1.1',
        status: 1
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

exports.findUser = function (email, next) {
    User.findOne({email: email.toLowerCase()}, function (err, user) {
        next(err, user);
    });
};