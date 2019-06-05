var express = require("express");
var path = require("path");
var api = require('./routing/apiRoutes');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/welcome", function (req, res) {
  res.sendFile(path.join(__dirname, "welcome.html"));
});

app.use('/api/stuff', api);





// var students = [{
//   name: "Michael G",
//   role: "Student",
//   skills: 'html, css, javascript'
// }];

// app.get("/api/stuff", function (req, res) {
//   return res.json(students);
// });

// app.post('/api/stuff', function (req, res) {
//   var newStudent = req.body;
//   students.push(newStudent);
//   res.json(newStudent);
//   console.log('something happened here')

// });

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});





app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});