const path = require('path');
const express = require('express');

const server = require('./api/server.js');
server.use(express.static(path.join(__dirname, 'frontend')))
server.get('/', (req, res)=> {
 res.sendFile(path.join(__dirname, 'frontend/index.html'))
});

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`*** Server listening on port ${port}. ***`);
});