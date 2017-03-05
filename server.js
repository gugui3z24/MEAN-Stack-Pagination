var express = require('express'); // ExperssJS Framework
var app = express(); // Invoke express to variable for use in application
var morgan = require('morgan'); // Import Morgan Package
var mongoose = require('mongoose'); // HTTP request logger middleware for Node.js
var path = require('path'); // Import path module

app.use(morgan('dev')); // Morgan Middleware
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

mongoose.connect('mongodb://localhost:27017/pagination', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
        console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); // Set index.html as layout
});

app.listen(8080, function() {
    console.log('Running the server on port ' + 8080); // Listen on configured port
});
