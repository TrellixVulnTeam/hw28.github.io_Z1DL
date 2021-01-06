var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");

const port = 3003;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost${port}/`);
})

var user = {
    "name": "Eva",
    "lastName": "Nikolaeva",
    "age": 16,
    "job": "doctor"
};

app.get('/get-user-info', function(request, response) {
    fs.readFile('./models/data.json', 'utf-8', function(error, data) {
        response
        .send(JSON.stringify(user));
    });
  });