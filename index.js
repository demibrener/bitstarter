var express = require('express');
var app = express();
var fs = require('fs')

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World 2! 0')
})

app.get('/archivo', function(req, res){
  var data = fs.readFileSync('index.html');
  console.log(data);
});

var buff = new Buffer(5);buff = fs.readFileSync('index.html');var string1 = buff.toString();console.log(string1 + "\n");
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
