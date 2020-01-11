const express = require('express');
const projectRouter = require('./projects/project-router.js');

const server = express();

const morgan = require('morgan');

server.use(express.json());
server.use(morgan('dev'));
server.use('/api/projects', projectRouter);

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong...'
  })
});

server.get('/', (req, res) => {
  res.send(`
  <h2>Node DB Challenge</h2>
  `)
});

module.exports = server;