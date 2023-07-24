const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.adminAuth = async(req, res, next)=>{
    const token = req.body.token || req.query.token || req.headers["access-token"]
    if(token){
        try {
            const verifyToken = jwt.verify(token, process.env.TOKEN_MAIN)
            req.user = verifyToken
            return next()
        } catch{
            return res.send("token invalid")
        }
    }
    return res.send("require admin token for access")
}