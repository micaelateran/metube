const express = require ('express');
const app = express();
const path = require ('path');


app.use(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
    var allowedOrigins = ['https://firebasestorage.googleapis.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
})

app.listen(process.env.PORT || 8080);

//PathLocationStrategy
app.get('/*', function(req,res){

    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log ('Console listening');
