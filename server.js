const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const route = require("./route/api")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use("/", route)

try {
    const conn = mongoose.connect(
        "mongodb+srv://zylaah:zylaah@blog-api.06urxre.mongodb.net/?retryWrites=true&w=majority"
        ).then(()=>{
            console.log("mongo is connected");
            app.listen(3333, ()=>{
                console.log("server is running");
            })
        })
}catch (error) {
    console.log("can not connect to mongoDB");
}
