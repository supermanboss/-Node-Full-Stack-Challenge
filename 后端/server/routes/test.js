var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('响应成功!')
});

module.exports = router;
