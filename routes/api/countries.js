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
        .sort({date: -1})
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
        sources: req.body.sources
    })

    newCountry.save()
        .then(item => res.json(item))
})

// @route   DELELTE api/countries
// @desc    Delete country
// @access  Public
router.delete("/:id", (req, res) => {
   Country.findById(req.params.id)
    .then(country => country.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})
    


module.exports = router