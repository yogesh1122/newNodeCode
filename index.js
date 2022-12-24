const express = require('express'); // importing lib for use
const app = express(); // call all express


//Useful URI
require('./setup/route')(app)
//DB connection
require('./setup/db')()
//server
require('./setup/sever')(app)

