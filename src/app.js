const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioroute=require('./routes/mario')

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.use('/',marioroute);



module.exports = app;