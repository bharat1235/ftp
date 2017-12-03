var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log("listeing to 3000")
})
app.get('/', function(req, res){
res.sendFile(__dirname+'/index.html');
})
app.get('/download', function(req, res){
var file =__dirname + '/readme.txt';
res.download(file);
})
