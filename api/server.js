const cool = require('cool-ascii-faces');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const todosRouter = require('../routers/todosRouter.js');
const authRouter = require('../routers/authRouter.js');
const usersRouter = require('../routers/usersRouter.js');
const authorization = require('../routers/authorization.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/todos', authorization, todosRouter); //todos list array 
server.use('/api/auth', authRouter); //register and login (receive token)
server.use('/api/users', authorization, usersRouter); //user profile (view, edit, delete)






// simple GET check that displays a random ascii face
server.get('/cool', (req, res) => {  // Deployment check
    res.send(cool());
});


module.exports = server;