var express = require('express'),
morgan = require('morgan'),
mongoose = require('mongoose'),

app = express();

// middleware
app.use(morgan('dev'));



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


app.listen(3000, function (err){
  if (err) throw err;
  console.log("Server is running on port 3000");
});
