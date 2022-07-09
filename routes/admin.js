const express = require('express');
const router = express.Router();

const crypto = require('crypto');
const fs = require('fs');

const verify = (signature) => {
}

router.post('/upload', function(req, res) {
  res.send(`posting: ${req.body.name}, ${req.body.data}, ${req.body.sign}\n`);
});

router.post('/delete', function(req, res) {
  res.send(`deleting: ${req.body.name}\n, ${req.body.sign}`);
});

module.exports = router;
