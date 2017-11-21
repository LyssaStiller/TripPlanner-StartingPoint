const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan');
const models = require('./models');
var db = models.db;


//CONFIGURATION MIDDLEWARE
app.use(express.static(path.join(__dirname, '..' , "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

//ROUTING MIDDLEWARE

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


  
  // handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
res.status(err.status || 500);
console.error(err);
res.send(err.message || "Internal Error");
});


app.listen(port, function(){
    console.log("Server is listening on port" + port);
    db
    .sync()
    .then(function(){
        console.log('synced!');
    })
    .catch(function(err) {
        console.log("trouble", err, err.stack)
    });
});

