const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/projectRouter');
const resourceRouter = require('./resources/resourceRouter');

const server = express();

server.use(helmet())
server.use(express.json());
server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
    res.send("hello server better live....")
})

module.exports = server;