var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("alsjfn");
    res.json({ title: 'nej' });
});

module.exports = router;
