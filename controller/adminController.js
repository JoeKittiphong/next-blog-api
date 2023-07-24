const adminModel = require("../mongo/adminModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.adminRegister = async (req, res) => {
    const { admin, password } = req.body
    if (!(admin && password)) {
        return res.send("can not add new admin")
    }

    const pwHash = await bcrypt.hash(password, 10)
    const already = await adminModel.findOne({ admin })
    if (already) {
        return res.send(`${admin} already exist`)
    }
    const token = await jwt.sign(
        { admin: admin, password: password },
        process.env.TOKEN_MAIN,
        { expiresIn: process.env.exp_token })
    await adminModel.create({ admin, password: pwHash, token: token })
    res.send(await adminModel.findOne({ admin }))
}

exports.adminLogin = async (req, res) => {
    const { admin, password } = req.body
    if (!(admin && password)) {
        return res.send("admin name and password are require")
    }

    const isAdmin = await adminModel.findOne({ admin })
    if (isAdmin && await bcrypt.compare(password, isAdmin.password)) {
        isAdmin.user = jwt.sign(
            { admin: admin, password: password },
            process.env.TOKEN_MAIN,
            { expiresIn: process.env.exp_token }
        )
        return res.send(isAdmin)
    }
    res.send("admin or password invalid")
}