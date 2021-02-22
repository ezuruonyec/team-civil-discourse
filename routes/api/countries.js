/** Express router providing country related routes
 * @module routes/api/countries
 * @requires express
 */

//  ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
//  ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
//  ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
//  ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
//  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
//  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//     

/**
 * Express module
 * @const
 */
const express = require("express")
const requireLogin = require("../../middlewares/requireLogin")

/**
 * Express router to mount country related functions on.
 * @type {object}
 * @const
 */
const router = express.Router()

/**
 * Country model
 * @const
 */
const Country = require("../../models/Country")


//   ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ ██╗   ██╗██████╗ ███████╗    ██████╗  ██████╗ ██╗   ██╗████████╗██╗███╗   ██╗ ██████╗ 
//  ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ ██║   ██║██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██║████╗  ██║██╔════╝ 
//  ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗██║   ██║██████╔╝█████╗      ██████╔╝██║   ██║██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
//  ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║██║   ██║██╔══██╗██╔══╝      ██╔══██╗██║   ██║██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
//  ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝╚██████╔╝██║  ██║███████╗    ██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
//   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
//                                                                                                                                       

/**
 * Routing to get ALL countries
 * @name /api/countries/
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.get("/", (req, res) => {
    Country.find()
        .sort({ name: 1 })
        .then(country => res.json(country))
})

/**
 * Routing to get a country by a given ISO-3166 Country Code
 * @name /api/countries/code/:code
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.get("/code/:code", requireLogin, (req, res) => {
    Country.findOne({code: req.params.code})
        .then(country => res.json(country))
})

/**
 * Routing to get a country by a given country name
 * @name /api/countries/name/:name
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.get("/name/:name", (req, res) => {
    Country.findOne({ name: req.params.name })
        .then(country => res.json(country))
})

// TODO: WHY IS THIS HERE???
/**
 * Routing to add a new country to the database
 * @name /api/countries/
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
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
        poverty_level: req.body.poverty_level,
    })

    newCountry.save()
        .then(item => res.json(item))
})

// TODO: Do we even need put functions? All update functionality *should* be performed through AWS
/**
 * Routing to update a country. Country is determined by whatever Country Code is provided in the given request body.
 * @name /api/countries/update
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
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
        { upsert: true }
    )
        .then(res.json({ sucesss: true }))
        .catch(err => res.status(404).json({ sucess: false }))
})

// TODO: WHY ARE THESE ALL PUBLIC
/**
 * Routing to delete a country by a given country name
 * @name /api/countries/:id
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.delete("/:id", (req, res) => {
    Country.findByIdAndDelete({ _id: req.params.id })
        .then(res.json({ sucesss: true }))
        .catch(err => res.status(404).json({ sucess: false }))
})

// Making it so our routings are all available to be imported by other modules
module.exports = router