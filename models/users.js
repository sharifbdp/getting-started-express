var DB = require('./db');

// var products = {

// 	create: function(req, res) {},

// 	getAll: function(req, res){

// 	var data = DB.connection.query("SELECT * from user", function( err, result) {

// 			if(err) {
// 			    console.log("ERROR :" + err);    
// 			} else {
// 			    var allProducts = data;
// 				res.json(allProducts);
// 			}

// 		});
// 	}

// };

exports.getAll = function(req, res){

	DB.connection.query("SELECT * from user", function( err, result) {

		if(err) {
		    console.log("ERROR :" + err);    
		} else {
		    console.log("ERROR :" + result);  
			return result;
		}

	});
};

//module.exports = products;