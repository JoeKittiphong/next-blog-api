const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const route = require("./route/api")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use("/", route)

try {
    const conn = mongoose.connect(process.env.MONGO).then(()=>{
            console.log("mongo is connected");
            app.listen(3333, ()=>{
                console.log("server is running");
            })
        })
}catch (error) {
    console.log("can not connect to mongoDB");
}
