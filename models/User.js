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
const { Schema } = mongoose

//  ███████╗ ██████╗██╗  ██╗███████╗███╗   ███╗ █████╗ 
//  ██╔════╝██╔════╝██║  ██║██╔════╝████╗ ████║██╔══██╗
//  ███████╗██║     ███████║█████╗  ██╔████╔██║███████║
//  ╚════██║██║     ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══██║
//  ███████║╚██████╗██║  ██║███████╗██║ ╚═╝ ██║██║  ██║
//  ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝
//                                                      
/**
 * A User Schema
 * @const
 */
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
    },
    googleId: String,
    displayName: String,
    name: Object,
    photos: Array
})

module.exports = User = mongoose.model("users", userSchema)