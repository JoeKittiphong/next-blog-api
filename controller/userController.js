const userModel = require("../mongo/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.register = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const isUser = await userModel.findOne({ userName })
        const isEmail = await userModel.findOne({ email })
        if (!userName && !email && !password) {
            return res.send("username email or password are required")
        }
        if (isUser) {
            return res.send("username is exist")
        }
        if (isEmail) {
            return res.send("email is exist")
        }
        const hashPW = await bcrypt.hash(password, 10)
        const token = jwt.sign(
            { userName, email, hashPW },
            process.env.TOKEN_KEY,
            { expiresIn: process.env.exp_token })

        userModel.create({
            userName,
            email: email.toLowerCase(),
            password: hashPW,
            token: token
        }
        )
        res.send("new user is created")
    } catch {
        res.send("can not register")
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            return res.send("email or password are required")
        }
        const user = await userModel.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            user.token = jwt.sign(
                { userName: user.userName, email: user.email, hashPW: user.password },
                process.env.TOKEN_KEY,
                { expiresIn: process.env.exp_token })
            res.send(user)
        }
    } catch {
        res.send("can not login")
    }
}