var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
