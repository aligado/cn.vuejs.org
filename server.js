var express = require('express');
var AV = require('leanengine');
var path = require('path');
var app = express();

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'HX00MPYKnp7MGz1q1FeBUKiC-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'KtfTMPVfYczU2Nl6Wwmp6tdQ',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || 'h37P7iioJtS2eVb3UUvwD0TF'
});

app.use(AV.express());
app.use(express.static('./'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./index.html'))
});
app.listen(process.env.LEANCLOUD_APP_PORT);
