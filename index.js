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

//  server setup

const port = process.env.PORT || 3000;
const server = http.createServer(app)

server.listen(port)
console.log("server listening on ", port)