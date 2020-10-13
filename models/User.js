const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    email:  {
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