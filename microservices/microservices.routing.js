const Router = require('express').Router;

const microservicesRouter = Router();

// Load and plug in album
const albumRouter = require('./album-db/album.routing');
microservicesRouter.use('/album', albumRouter);

module.exports = microservicesRouter;