var express = require("express");
var router = express.Router();

var restaurant = require("../models/restaurant.js");

// Form posts send booleans as the strings "true" / "false".
function toBool(value) {
	return value === true || value === "true";
}

function parseId(req, res) {
	var id = Number(req.params.id);
	if (!Number.isInteger(id) || id < 1) {
		res.status(400).json({ error: "invalid id" });
		return null;
	}
	return id;
}

router.get("/", function(req, res, next) {
	restaurant.selectAll(function(err, data) {
		if (err) return next(err);
		res.render("index", { restaurants: data });
	});
});

router.post("/api/restaurant", function(req, res, next) {
	var name = req.body && typeof req.body.name === "string" ? req.body.name.trim() : "";
	if (!name) {
		return res.status(400).json({ error: "name is required" });
	}
	restaurant.insertOne(["restaurant", "visited"], [name, toBool(req.body.visited)], function(err, result) {
		if (err) return next(err);
		res.json({ id: result.insertId });
	});
});

router.put("/api/restaurant/:id", function(req, res, next) {
	var id = parseId(req, res);
	if (id === null) return;
	restaurant.updateOne({ visited: toBool(req.body && req.body.visited) }, id, function(err, result) {
		if (err) return next(err);
		res.status(result.affectedRows === 0 ? 404 : 200).end();
	});
});

router.delete("/api/restaurant/:id", function(req, res, next) {
	var id = parseId(req, res);
	if (id === null) return;
	restaurant.deleteOne(id, function(err, result) {
		if (err) return next(err);
		res.status(result.affectedRows === 0 ? 404 : 200).end();
	});
});

module.exports = router;
