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
router.get("/code/:code", (req, res) => {
    Country.findOne({ code: req.params.code })
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

// Making it so our routings are all available to be imported by other modules
module.exports = router
