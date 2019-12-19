var express = require('express');
var app = express();

function getStudent(req, res) {
    res.send("Displaying the student")
}

function getSchools(req, res) {
    res.send("Displaying Schools")
}

app.get('/students', getStudent);
app.get('/schools', getSchools);
app.get('/', function (req, res) {
    res.send("Welcome to the Express Routing")
});
var server = app.listen(8082, function () {
});