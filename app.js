var express = require('express');
var app = express();

// Routes

// home
app.get('/', function (req, res) {
    res.send("This is a server response on the home page");
});

// movie_single
app.get('/london_brutalism_icon/:icon_number?', function (req, res) {
    var icon_number = req.params.icon_numer;
    res.send("This is a page for brutalism icon " + icon_number);
});

app.listen(3000, function () {
    console.log('This application is running on local host:3000');
});