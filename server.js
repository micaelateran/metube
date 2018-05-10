const express = require ('express');
const app = express();
const path = require ('path');


app.use(express.static(__dirname + '/dist'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.listen(process.env.PORT || 8080);

//PathLocationStrategy
app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log ('Console listening');