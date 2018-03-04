var express = require("express");
var router = express.Router();

var restaurant = require("../models/restaurant.js");

router.get("/", function(req, res) {
	restaurant.selectAll(function(data) {
		var hbsObject = {
			restaurants: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/restaurant", function(req, res) {
	console.log("restaurant " + req.body.name);
	console.log("visited status" + req.body.visited);
	restaurant.insertOne([
		"restaurant", "visited"
	], [
		req.body.name, req.body.visited
	], function(result) {
		res.json({ id: result.insertId});
	});
});

router.put("/api/restaurant/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log(req.body);
	console.log("condition", condition);


	restaurant.updateOne({
		visited: req.body.visited
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.delete("/api/restaurant/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition ", condition);

	restaurant.deleteOne(condition, function(result) {
		if(result.affectedRows === 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;