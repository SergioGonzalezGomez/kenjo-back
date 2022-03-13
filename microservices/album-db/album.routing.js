const express = require('express');
const AlbumDbMicroservice = require('./album.microservice');
const albumDbMicroservice = new AlbumDbMicroservice();

const albumDbRouter = express.Router();

albumDbRouter.use(express.json({limit: '50mb'}));

// CREATE
albumDbRouter.post('/create',
  (req, res, next) => {
    albumDbMicroservice.create(req, res, next);
  });

// READ
albumDbRouter.get('/',
  (req, res, next) => {
    albumDbMicroservice.find(req, res, next);
  });

// UPDATE
albumDbRouter.put('/:id',
  (req, res, next) => {
    albumDbMicroservice.updateById(req, res, next);
  });

// UPDATE
albumDbRouter.delete('/:id',
  (req, res, next) => {
    albumDbMicroservice.deleteById(req, res, next);
  });

module.exports = albumDbRouter;