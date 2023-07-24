const mongoose = require("mongoose")

const adminSchema = mongoose.Schema(
    {
    admin: String,
    password: String
    }, {
    collection: 'Blog'
    }
)
const adminModel = mongoose.model("admin", adminSchema)
module.exports = adminModel