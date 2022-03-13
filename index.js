// Dependencies
const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();

// Importing different modules and routers
const microservicesRouting = require('./microservices/microservices.routing');

// Creating the app
const app = express();

var corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204,
    maxAge: 500
}

app.use(cors(corsOptions));

// Load and plug in the microservices routers
app.use(microservicesRouting);

// Error handling
app.use((error, req, res, next) => {
  if (!res.writableEnded) {
    res.status(500).json(error.message);
  }
  return;
})

// Initialize database
let server;
let mongoClient;
const urlDb = process.env.MONGO_DB;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

(async () => {
    try {
        mongoClient = await MongoClient.connect(urlDb, mongoOptions);
        app.locals.mongodb = mongoClient.db(mongoClient.options.dbName);

        app.locals.mongoose = mongoose.connect(urlDb, mongoOptions);
        mongoose.set('runValidators', true);

        // Listen for requests
        const port = 3000 || 8080;

        server = app.listen(port, '0.0.0.0', () => {
            console.info(`Microservices are listening on port ${port}!`);
        });

        server.on('error', (serverError) => {
            console.error('Server error', serverError);
        });
    } catch (mongoError) {
        console.error('Mongo error', mongoError);
    }
})();

process.setMaxListeners(14);

