const mongoose = require("mongoose")
const Schema = mongoose.Schema

// create schema
const CountrySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    code: {
        type: String,
        required:true
    },
    population: {
        type: Number
    },
    millenium_dec: [{
        ratified: Boolean,
        year: Number
    }],
    freedom_speech: {
        type: Boolean,
        required: true
    },
    freedom_media: [{
        present: Boolean,
        year: Number
    }],
    rwb_ranking: {
        type: Number,
        required:true
    },
    rwb_score: {
        type: Number,
        required:true
    },
    sources: [],
    updated: {
        type: Date,
        default: Date.now
    }
})

module.exports = Country = mongoose.model("country", CountrySchema)