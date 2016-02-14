var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function (req, res, next) {
        data = {
        title: 'Welcome to Dashboard',
        user: {
            firstname: 'Sharif',
            lastname: 'Ul Islam',
            email: 'sharif@test.com'
        }
    };
    res.render('dashboard/index', {layout: false, data: data});
});

router.get('/login', function (req, res, next) {
    res.render('auth/login', {title: 'Login Here'});
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
    });
});

module.exports = router;
