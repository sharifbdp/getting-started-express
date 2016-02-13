var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'db_mean_tut'
});

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected.");    
	} else {
	    console.log("Error connecting database : " + err);    
	}
});

exports.connection = connection;