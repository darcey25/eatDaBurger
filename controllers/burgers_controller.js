var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burger", function(req, res) {
	console.log("burger " + req.body.name);
	console.log("eaten status" + req.body.eaten);
	burger.insertOne([
		"burger", "eaten"
	], [
		req.body.name, req.body.eaten
	], function(result) {
		res.json({ id: result.insertId});
	});
});

router.put("/api/burger/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log(req.body);
	console.log("condition", condition);


	burger.updateOne({
		eaten: req.body.eaten
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;