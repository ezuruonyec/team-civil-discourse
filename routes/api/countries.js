const express = require("express")
const { count } = require("../../models/Country")
const router = express.Router()

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

        // sources: req.body.sources,
        // freedom_speech: req.body.freedom_speech,
        // freedom_media: req.body.freedom_media,
        // fake_news: req.body.fake_news,
        poverty_level: req.body.poverty_level,
    })

    newCountry.save()
        .then(item => res.json(item))
})

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