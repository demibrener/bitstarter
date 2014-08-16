var express = require('express');
var app = express();
var fs = require('fs');
var buf = new Buffer('utf-8')

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World 2! 0')
})

app.get('/archivo', function(req, res){
  var data = fs.readFileSync('index.html');
  console.log(data);
});

app.get('/archivo', function(requ, res){
 var buf = buf.toString('utf-8');
 console.log(buf);
});
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
