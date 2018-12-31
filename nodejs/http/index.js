const express = require('express')
const app = express()
const port = 300
const host = "127.0.0.1";

app.get('/',(req, res) => res.send('Welcome to OZ'))
app.get('/sum/:num1/:num2',(req, res) => {
    let obj = {
        result : parseInt(req.params.num1) + parseInt(req.params.num2),
        paramsObj : req.params
    }
    res.send(obj)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// var host = "127.0.0.1";
// var port = 300;
// var express = require("express");

// var app = express();
// app.use('/', express.static(__dirname + '/'));
// app.listen(port, host);

// console.log('Running server at http://localhost:' + port + '/');