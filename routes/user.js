var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/profile', function (req, res, next) {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;
