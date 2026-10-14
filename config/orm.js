var connection = require("../config/connection.js");

// Every value goes through mysql2 placeholders: "??" for identifiers and "?"
// for values, so user input is always escaped.
var orm = {
	selectAll: function(table, cb) {
		connection.query("SELECT * FROM ??", [table], function(err, result) {
			if (err) return cb(err);
			cb(null, result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var placeholders = vals.map(function() { return "?"; }).join(", ");
		var queryString = "INSERT INTO ?? (??) VALUES (" + placeholders + ")";
		connection.query(queryString, [table, cols].concat(vals), function(err, result) {
			if (err) return cb(err);
			cb(null, result);
		});
	},
	updateOne: function(table, objColVals, id, cb) {
		connection.query("UPDATE ?? SET ? WHERE id = ?", [table, objColVals, id], function(err, result) {
			if (err) return cb(err);
			cb(null, result);
		});
	},
	deleteOne: function(table, id, cb) {
		connection.query("DELETE FROM ?? WHERE id = ?", [table, id], function(err, result) {
			if (err) return cb(err);
			cb(null, result);
		});
	}
};

module.exports = orm;
