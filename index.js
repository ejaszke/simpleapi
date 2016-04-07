var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.json({api: '1.0.0'});
});

var clients = require('./clients.js')(app);

var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
})

