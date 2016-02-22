var express = require('express');
var router = express.Router();
var userService = require('../services/user-services.js')


/* GET users listing. */
router.get('/', function (req, res) {

    userService.getAllData(function (err, lists) {
        if (err) {
            res.render('users/index', {layout: false, error: err});
            //return res.status(500).json({error: 'Failed to retrieve restaurants'});
        }
        res.render('users/index', {layout: false, data: lists});
    });

});


/* Show add user form */
router.get('/create', function (req, res) {

    var data = {
        title: 'Create an Account',
        input: req.body,
        error: 'Someting went wrong'
    };
    res.render('users/create', {layout: false, data: data});

});

/* Add User */
router.post('/create', function (req, res, next) {

    userService.addUser(req.body, function (err) {
        if (err) {
            var data = {
                title: 'Create an Account',
                input: req.body,
                error: 'Someting went wrong'
            };
            res.render('user/create', {layout: false, data: data});
        }
        res.render('users/index', {layout: false});
    });

});

module.exports = router;