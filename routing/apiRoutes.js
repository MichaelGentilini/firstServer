var express = require("express");
var path = require("path");
var app = express();

module.exports = function (app) {
  var students = [{
    name: "James Bond",
    role: "Spy",
    skills: 'Espionage, Killing'
  }];

  app.get("/api/stuff", function (req, res) {
    return res.json(students);
  });

  app.post('/api/stuff', function (req, res) {
    var newStudent = req.body;
    students.push(newStudent);
    // res.json(newStudent);
    res.json(students);
    console.log('something happened here')

  });
};