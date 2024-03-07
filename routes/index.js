var express = require('express');
var router = express.Router();

const postTestArray = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Welcome to the API' });
});

router.post('/test', function (req, res, next) {
  if (!req.body.data) return res.status(400).json({ message: 'Data is required' });
  postTestArray.push(req.body.data);
  res.status(200).json({ message: 'push Successful' });
});

router.get('/test', function (req, res, next) {
  res.status(200).json({ data: postTestArray });
});

module.exports = router;
