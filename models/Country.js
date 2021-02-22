/** MongoDB Schema providing data about a country
 * @module models/Country
 * @requires mongoose
 */

/**
 * Mongoose module
 * @const
 */
const mongoose = require("mongoose")

/**
 * Generic Mongoose Schema
 * @const
 */
const Schema = mongoose.Schema

//  ███████╗ ██████╗██╗  ██╗███████╗███╗   ███╗ █████╗ 
//  ██╔════╝██╔════╝██║  ██║██╔════╝████╗ ████║██╔══██╗
//  ███████╗██║     ███████║█████╗  ██╔████╔██║███████║
//  ╚════██║██║     ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══██║
//  ███████║╚██████╗██║  ██║███████╗██║ ╚═╝ ██║██║  ██║
//  ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝
//                                                     
/**
 * A Country Schema
 * @const
 */
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
})

module.exports = Country = mongoose.model("country", CountrySchema)