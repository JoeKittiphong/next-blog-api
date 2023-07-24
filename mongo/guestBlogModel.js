const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true },
    tag: { type: String, required: true },
    content: { type: String, required: true },
    views: { type: Number, required: true },
}, {
    timestamps: true
}, {
    collection: 'guest'
})

const postModel = mongoose.model("guest", postSchema)
module.exports = postModel