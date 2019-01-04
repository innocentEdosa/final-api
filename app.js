const http = require('http');

const express = require('express');

// import a body parser for express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//  import routers
const meetupRoutes = require('./routes/meetup');

// middleware
app.use('/api/v1/meetups', meetupRoutes);

const server = http.createServer(app);
server.listen(process.env.PORT || 3004);
module.exports = server;
