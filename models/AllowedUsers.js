const mongoose = require("mongoose")
const {Schema} = mongoose

const allowedUserSchema = new Schema({
    email: String
})

mongoose.model("allowed_users", allowedUserSchema)