const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const route = require("./route/blog")
const user = require("./route/user")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/blog", route)
app.use("/user", user)

mongoose.Promise
try {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("mongo is connected");
        app.listen(process.env.PORT, () => {
            console.log("server is running");
        })
    })
} catch {
    console.log("can not connect to mongoDB");
}
