const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
const PORT = (process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routing
// require('./routes/api-routes')(app);
// require('./routes/html-routes')(app);

app.listen(PORT, function() {
    console.log('Listening to ' + PORT);
});