var connection = require('../config/connection.js');

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
	selectall: function(tableInput, cb){
		var query = 'SELECT * FROM ' + tableInput;

		connection.query(query, function(err,result){
			if(err) throw err;

			cb(result)
		})
	},
	insertOne: function(tableInput, cols, vals, cb){

		var query = "INSERT INTO " + tableInput;
		query += " (";
	    query += cols.toString();
	    query += ") ";
	    query += "VALUES (?,?)"

	    connection.query(query, vals, function(err, result){
	    	if (err) throw err;

	    	cb(result);
	    });
	},
	updateOne: function(tableInput, objColVals, condition, cb){
		var query = "UPDATE " + tableInput;

    	query += " SET ";
    	query += objToSql(objColVals);
    	query += " WHERE ";
    	query += condition;

    	console.log(query)

    	connection.query(query, function(err, result){
    		if (err) throw err;

    		cb(result);
    	});
	}	
};

module.exports = orm;