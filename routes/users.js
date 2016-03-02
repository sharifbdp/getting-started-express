var express = require('express');
var router = express.Router();
var userService = require('../services/user-services.js')

var data = [];

/* GET users listing. */
router.get('/', function (req, res) {

    data['title'] = 'User list';

    userService.getAllData(function (err, lists) {
        if (err) {
            res.render('users/index', {layout: false, error: err});
            //return res.status(500).json({error: 'Failed to retrieve restaurants'});
        }
        data['content'] = lists;
        res.render('users/index', {
            layout: false,
            data: data
        });
    });

});


// Create new user form
router.get('/create', function (req, res) {

    data['title'] = 'Create an Account';
    res.render('users/create', {layout: false, data: data});

});

/* Add User */
router.post('/create', function (req, res) {

    data['title'] = 'Create an Account';
    userService.addUser(req.body, function (err) {
        if (err) {
            data['error'] = err;
            res.render('user/create', {layout: false, data: data});
        }
        res.redirect('/users');
    });

});

// Edit user view form
router.get('/edit/:id', function (req, res, next) {

    var id = req.params.id;
    //console.log('Retrieving user: ' + id);

    data['title'] = 'User details';
    userService.findUser(id, function (err, user) {
        if (err) {
            res.render('users/index', {layout: false, error: err, data: data});
            //return res.status(500).json({error: 'Failed to retrieve restaurants'});
        }
        data['content'] = user;
        res.render('users/edit', {
            layout: false,
            data: data
        });
    });

});

// Create new user form
router.put('/edit/:id', function (req, res, next) {

    var id = req.params.id;
    var form_data = req.body;

    data['title'] = 'Update User';
    userService.updateData(id, form_data, function (err, user) {
        if (err) {
            res.render('users/index', {layout: false, error: err, data: data});
        }
        res.redirect('/users');
    });

});

module.exports = router;