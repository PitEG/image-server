var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/upload', function(req, res) {
  res.send(`posting: ${req.query.name}\n`);
});

router.post('/delete', function(req, res) {
  res.send(`deleting: ${req.query.name}\n`);
});

module.exports = router;
