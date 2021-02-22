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
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 */
const router = express.Router()

/**
 * Country model
 * @const
 */
const User = require("../../models/User")


//   ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ ██╗   ██╗██████╗ ███████╗    ██████╗  ██████╗ ██╗   ██╗████████╗██╗███╗   ██╗ ██████╗ 
//  ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ ██║   ██║██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝██║████╗  ██║██╔════╝ 
//  ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗██║   ██║██████╔╝█████╗      ██████╔╝██║   ██║██║   ██║   ██║   ██║██╔██╗ ██║██║  ███╗
//  ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║██║   ██║██╔══██╗██╔══╝      ██╔══██╗██║   ██║██║   ██║   ██║   ██║██║╚██╗██║██║   ██║
//  ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝╚██████╔╝██║  ██║███████╗    ██║  ██║╚██████╔╝╚██████╔╝   ██║   ██║██║ ╚████║╚██████╔╝
//   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
//                                                                                                                                       

/**
 * Routing to get a user (defined by the request body)
 * @name api/users/
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.get("/", (req, res) => {
    User.find()
        .then(user => res.json(user))
})

/**
 * Routing to add a user (defined by the request body)
 * @name api/users/
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 * @access public
 */
router.post("/", (req, res) => {
    const newUser = new User({
        email: req.body.email,
        googleId: "",
        displayName: "",
        name: {
            familyName: "",
            givenName: ""
        },
        photos: []

    })

    newUser.save()
        .then(item => res.json(item))

  
})

// Making it so our routings are all available to be imported by other modules
module.exports = router