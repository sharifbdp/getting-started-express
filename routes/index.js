var express = require('express');
var router = express.Router();

var service = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function (req, res, next) {

    var D = service.getAll();

    console.log(" \n\n\n\n\n\ heeeeeee \n\n\n\n\n: "+ D);

        data = {
        title: 'Welcome to Dashboard',
        check: D,
        user: {
            firstname: 'Sharif',
            lastname: 'Ul Islam',
            email: 'sharif@test.com'
        }
    };
    res.render('dashboard', {layout: false, data: data});
});

router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login Here'});
});

router.get('/reg', function (req, res, next) {
    res.render('variable', {
        layout: false,
        title: 'Basic Variable',
        user: {
            firstname: 'Sharif',
            lastname: 'Ul Islam',
            email: 'sharif@test.com'
        }
    }
    );
    
//    data = {
//        title: 'Reg Here',
//        user: {
//            firstname: 'Sharif',
//            lastname: 'Ul Islam',
//            email: 'sharif@test.com'
//        }
//    };
//    res.render('variable', {layout: false, data: data});
    
});

module.exports = router;
