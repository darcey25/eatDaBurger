var orm = require("../config/orm.js");

var restaurant = {
	selectAll: function(cb) {
		orm.selectAll("restaurants", function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne("restaurants", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("restaurants", objColVals, condition, function(res) {
			cb(res);
		});
	},
	deleteOne: function(condition, cb) {
		orm.deleteOne("restaurants", condition, function(res) {
			cb(res);
		});
	}
}

module.exports = restaurant;
