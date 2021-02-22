const express = require("express")
const { count } = require("../../models/Country")
const router = express.Router()

// const fs = require('fs')
// fs.readFile('./dummy_file.json', 'utf8', (err, jsonString) => {
//     if(err) {
//         console.log("File read Failed:", err)
//         return
//     }
//     try {
//         const parsed_data = JSON.parse(jsonString)
//       //  console.log('Article Data:', parsed_data.articles)
//         const article_array = parsed_data.articles 
//     } catch(err) {
//         console.log("Error parsing JSON string:", err)
//     }
    
// })

// item model
const Country = require("../../models/Country")

// @route GET api/countries
// @desc Get All Countries
// @access Public
router.get("/", (req, res) => {
    Country.find()
        .sort({name: 1})
        .then(country => res.json(country))
})

// @route   GET api/countries
// @desc    Create countries
// @access  Public
router.post("/", (req, res) => {
    const newCountry = new Country({
        name: req.body.name,
        two_digit: req.body.two_digit,
        three_digit: req.body.three_digit,
        cd_rating: req.body.cd_rating,
        cd_ranking: req.body.cd_ranking,
        rwb_score: req.body.rwb_score,
        rwb_ranking: req.body.rwb_ranking,
        internet_access: req.body.internet_access,
        internet_access_ranking: req.body.internet_access_ranking,
        internet_access_year: req.body.internet_access_year,
        censorship_level: req.body.censorship_level,
        censorship_ranking: req.body.censorship_ranking,
        millenium_dec_ranking: req.body.millenium_dec_ranking,
        millenium_dec_ratified: req.body.millenium_dec_ratified,
        millenium_dec_year: req.body.millenium_dec_year,
        population: req.body.population,
        article_1_title: req.body.article_1_title,
        article_1_author: req.body.article_1_author,
        article_1_description: req.body.article_1_description,
        article_1_date: req.body.article_1_date,
        article_1_source: req.body.article_1_source,
        article_1_url: req.body.article_1_url,
        article_2_title: req.body.article_2_title,
        article_2_author: req.body.article_2_author,
        article_2_description: req.body.article_2_description,
        article_2_date: req.body.article_2_date,
        article_2_source: req.body.article_2_source,
        article_2_url: req.body.article_2_url,
        article_3_title: req.body.article_3_title,
        article_3_author: req.body.article_3_author,
        article_3_description: req.body.article_3_description,
        article_3_date: req.body.article_3_date,
        article_3_source: req.body.article_3_source,
        article_3_url: req.body.article_3_url,
        article_4_title: req.body.article_4_title,
        article_4_author: req.body.article_4_author,
        article_4_description: req.body.article_4_description,
        article_4_date: req.body.article_4_date,
        article_4_source: req.body.article_4_source,
        article_4_url: req.body.article_4_url,
        article_5_title: req.body.article_5_title,
        article_5_author: req.body.article_5_author,
        article_5_description: req.body.article_5_description,
        article_5_date: req.body.article_5_date,
        article_5_source: req.body.article_5_source,
        article_5_url: req.body.article_5_url,
        
        // sources: req.body.sources,
        // freedom_speech: req.body.freedom_speech,
        // freedom_media: req.body.freedom_media,
        // fake_news: req.body.fake_news,
        poverty_level: req.body.poverty_level,
        article_array: req.body.article_array,
        article_array1: req.body.article_array1.articles.title,
    })

    newCountry.save()
        .then(item => res.json(item))

    
    
})

// router.post("../../", (req, res) => 

// @route   GET api/countries
// @desc    Get a single country by the country code
// @access  Public

// router.get("/:code", (req, res) => {
//     Country.findOne({code: req.params.code})
//         .then(country => res.json(country))
// })

// @route   PUT api/countries/update
// @desc    Update a country
// @access  Public
router.put("/update", (req, res) => {
    console.log(req.body)
    Country.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        two_digit: req.body.two_digit,
        three_digit: req.body.three_digit,
        cd_rating: req.body.cd_rating,
        cd_ranking: req.body.cd_ranking,
        rwb_score: req.body.rwb_score,
        rwb_ranking: req.body.rwb_ranking,
        internet_access: req.body.internet_access,
        internet_access_ranking: req.body.internet_access_ranking,
        internet_access_year: req.body.internet_access_year,
        censorship_level: req.body.censorship_level,
        censorship_ranking: req.body.censorship_ranking,
        millenium_dec_ranking: req.body.millenium_dec_ranking,
        millenium_dec_ratified: req.body.millenium_dec_ratified,
        millenium_dec_year: req.body.millenium_dec_year,
        population: req.body.population,
        poverty_level: req.body.poverty_level,
        article_array: req.body.article_array,
        article_array1: req.body.article_array1.articles.title,
        updated: Date.now()
        // sources: req.body.sources,
        // freedom_speech: req.body.freedom_speech,
        // freedom_media: req.body.freedom_media,
        // fake_news: req.body.fake_news,
    },
    {upsert: true}
    )
    .then(res.json({sucesss:true}))
    .catch(err => res.status(404).json({sucess: false}))
})



// @route   DELELTE api/countries
// @desc    Delete country
// @access  Public
router.delete("/:id", (req, res) => {
   Country.findByIdAndDelete({_id: req.params.id})
   .then(res.json({sucesss:true}))
   .catch(err => res.status(404).json({sucess: false}))
})

// @route GET api/countries/:name
// @desc Get All Countries
// @access Public
router.get("/name/:name", (req, res) => {
    Country.findOne({name: req.params.name})
        .then(country => res.json(country))
})


module.exports = router
