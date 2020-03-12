require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const http = require("http");

const router = require("./router");
const app = express();

// app setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//DB setup

const connectURL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@raphcluster-apijd.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(connectURL, {useNewUrlParser: true, useUnifiedTopology: true})

//  server setup
console.log(process.env.secret);

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log("server listening on ", port);
