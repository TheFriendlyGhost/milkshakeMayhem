var orm = require("../config/orm.js");

var milkshake = {
	selectall: function(cb){
		orm.selectall("milkshakes", function(res){
			cb(res);
		})
	},

	insertOne: function(cols, vals, cb){
		orm.insertOne("milkshakes", cols, vals, function(res) {
			cb(res);
		})
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("milkshakes", objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = milkshake