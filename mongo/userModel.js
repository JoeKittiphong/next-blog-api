const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: String
}, {
    timestamps: true
}, {
    collection: 'user'
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel