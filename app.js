var express = require('express');
var app = express();

// Routes

// home
app.get('/', function(req, res) {
    res.send("This is a server response on the home page");
});

app.listen(3000, function() {
    console.log('This application is running on local host:3000');
});