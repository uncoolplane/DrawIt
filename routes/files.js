/*https://sonnguyen.ws/how-to-upload-files-with-nodejs-and-expressjs-4/  */

'use strict';
var express = require('express'),
    router = express.Router();

router.use('/api/v1/upload', require('../modules/upload'));

// nothing for root
router.get('/image', function(req, res){
    res.send(JSON.stringify({}));
});

router.get('/image/:fileName', function(req, res) {
  var path = require('path');
  var file = path.join(__dirname, 'uploads/', req.params.filename);
  res.sendFile(file);
});

module.exports = router;
