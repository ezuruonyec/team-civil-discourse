const express = require("express")
const router = express.Router()

const User = require("../../models/User")

// item model
router.get("/", (req, res) => {
    User.find()
        .then(user => res.json(user))
})

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

module.exports = router