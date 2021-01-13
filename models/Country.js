const mongoose = require("mongoose")
const Schema = mongoose.Schema

// create schema
const CountrySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        
    },
    two_digit: {
        type: String,
    },
    three_digit: {
        type: String,
    },
    population: {
        type: Number
    },
    millenium_dec_ranking: {
        type: Number
    },
    millenium_dec_ratified: {
        type: String
    },
    millenium_dec_year: {
        type: Number
    },
    rwb_ranking: {
        type: Number,
    },
    rwb_score: {
        type: Number,
    },
    internet_access: {
        type: Number,
    },
    internet_access_ranking: {
        type: Number,
    },
    internet_access_year: {
        type: Number,
    },
    censorship_level: {
        type: Number,
    },
    censorship_ranking: {
        type: Number,
    },
    cd_rating: {
        type: Number,
    },
    cd_ranking: {
        type: Number,
    },
    poverty_level: {
        type: Number,
    }
    // sources: [],
    // updated: {
    //     type: Date,
    //     default: Date.now
    // }
    // freedom_speech: [{
    //     present: Boolean,
    //     restrictions: String
    // }],
    // freedom_media: [{
    //     present: Boolean,
    //     restrictions: String,
    //     year: Number
    // }],
    // fake_news: [{
    //     present: Boolean,
    //     description: String,
    //     year: Number,
    //     prosecution: Boolean,
    // }],


})

module.exports = Country = mongoose.model("country", CountrySchema)