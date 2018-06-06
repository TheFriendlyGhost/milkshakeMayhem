var express = require('express')

var milkshake = require('../models/milkshake.js')

var router = express.Router()

router.get('/', function(req, res){
	milkshake.selectall(function(data){
		var hbsObject = {
			milkshakes: data
		};
		console.log(hbsObject)
		res.render("index", hbsObject)
	})
})

router.post('/api/milkshakes', function(req,res){
	milkshake.insertOne([
		"milkshake_name", "drank"
		], [
			req.body.name, req.body.drank
		], function(result) {
			res.json({ id: result.insertId});
	});
});

router.put('/api/milkshakes/:id', function(req,res){
	var condition = "id = " + req.params.id;

	console.log(condition)
  console.log(req.body)

	milkshake.updateOne({
		drank: 1
	}, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

module.exports = router;