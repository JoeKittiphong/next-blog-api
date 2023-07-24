const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["access-token"]
    if (token) {
        try {
            const verifyToken = jwt.verify(token, process.env.TOKEN_KEY)
            req.user = verifyToken
            return next()
        } catch{
            return res.send("token is invalid")
        }
    }
    return res.send("require token for access")

}