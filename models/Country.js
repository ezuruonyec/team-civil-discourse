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

    },
    article_array: {
	    type: Array,
    },
    article_1_title: {
        type: String,
    },
    article_1_author: {
        type: String,
    },
    article_1_description: {
        type: String,
    },
    article_1_date: {
        type: String,
    },
    article_1_source: {
        type: String,
    },
    article_1_url: {
        type: String,
    },
    article_2_title: {
        type: String,
    },
    article_2_author: {
        type: String,
    },
    article_2_description: {
        type: String,
    },
    article_2_date: {
        type: String,
    },
    article_2_source: {
        type: String,
    },
    article_2_url: {
        type: String,
    },
    article_3_title: {
        type: String,
    },
    article_3_author: {
        type: String,
    },
    article_3_description: {
        type: String,
    },
    article_3_date: {
        type: String,
    },
    article_3_source: {
        type: String,
    },
    article_3_url: {
        type: String,
    },
    article_4_title: {
        type: String,
    },
    article_4_author: {
        type: String,
    },
    article_4_description: {
        type: String,
    },
    article_4_date: {
        type: String,
    },
    article_4_source: {
        type: String,
    },
    article_4_url: {
        type: String,
    },
    article_5_title: {
        type: String,
    },
    article_5_author: {
        type: String,
    },
    article_5_description: {
        type: String,
    },
    article_5_date: {
        type: String,
    },
    article_5_source: {
        type: String,
    },
    article_5_url: {
        type: String,
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
