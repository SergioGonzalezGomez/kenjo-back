
const mongoose = require('mongoose');

const COLLECTION_NAME = 'album-db';

const albumSchema = {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    artist: { type: String, required: true, trim: true },
    photoUrl: { type: String, trim: true },
    score: { type: Number } // Modify this field as you need
    // Add any  fields you need
};

const albumDbModel = mongoose.model(COLLECTION_NAME, albumSchema);

// Creating unique index
const compoundIndex = {
    title: 1,
    artist: 1
};
albumDbModel.schema.index(compoundIndex, { unique: true });

module.exports = albumDbModel;
