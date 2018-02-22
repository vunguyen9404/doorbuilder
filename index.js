var express = require('express');
var app = express();
var request = require('request');
var query = require('query-string');

// Create NodeJs server
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server listening on port 3000...');
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.render('index');
})
// Versioning