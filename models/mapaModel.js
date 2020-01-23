const mongoose = require('mongoose');

const { Schema } = mongoose;

const mapaModel = new Schema({
    name: { type: String },
    longitud: { type: String },
    latitud: { type: String },
});

module.exports = mongoose.model('Map', mapaModel);