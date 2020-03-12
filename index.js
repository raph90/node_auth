require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const http = require('http')

const router = require('./router')
const app = express()

// app setup 
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*'}))
router(app)


// mongodb+srv://<username>:<password>@raphcluster-apijd.mongodb.net/test?retryWrites=true&w=majority


//  server setup
console.log(process.env.secret)

const port = process.env.PORT || 3000;
const server = http.createServer(app)

server.listen(port)
console.log("server listening on ", port)