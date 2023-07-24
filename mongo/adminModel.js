const mongoose = require("mongoose")

const adminSchema = mongoose.Schema(
    {
    admin: String,
    password: String,
    token : String
    }, {
    collection: 'admin'
    }
)
const adminModel = mongoose.model("admin", adminSchema)
module.exports = adminModel