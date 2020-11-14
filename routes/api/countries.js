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
        code: req.body.code,
        population: req.body.population,
        millenium_dec: req.body.millenium_dec,
        freedom_speech: req.body.freedom_speech,
        freedom_media: req.body.freedom_media,
        rwb_ranking: req.body.rwb_ranking,
        rwb_score: req.body.rwb_score,
        fake_news: req.body.fake_news,
        internet_access: req.body.internet_access,
        censorship_level: req.body.censorship_level,
        cd_rating: req.body.cd_rating,
        sources: req.body.sources
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
        code: req.body.code,
        population: req.body.population,
        millenium_dec: req.body.millenium_dec,
        freedom_speech: req.body.freedom_speech,
        freedom_media: req.body.freedom_media,
        rwb_ranking: req.body.rwb_ranking,
        rwb_score: req.body.rwb_score,
        fake_news: req.body.fake_news,
        internet_access: req.body.internet_access,
        censorship_level: req.body.censorship_level,
        cd_rating: req.body.cd_rating,
        sources: req.body.sources,
        updated: Date.now()
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