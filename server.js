var express = require('express');
var AV = require('leanengine');
var path = require('path');
var app = express();
app.use(AV.express());
app.use(express.static('./'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'))
});
app.listen(process.env.LEANCLOUD_APP_PORT);
