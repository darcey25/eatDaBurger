var orm = require("../config/orm.js");

var restaurant = {
	selectAll: function(cb) {
		orm.selectAll("restaurants", cb);
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne("restaurants", cols, vals, cb);
	},
	updateOne: function(objColVals, id, cb) {
		orm.updateOne("restaurants", objColVals, id, cb);
	},
	deleteOne: function(id, cb) {
		orm.deleteOne("restaurants", id, cb);
	}
};

module.exports = restaurant;
