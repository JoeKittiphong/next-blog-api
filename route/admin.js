const adminController = require("../controller/adminController")
const adminRouter = require("express").Router()
const adminAuth = require("../middleware/adminAuth").adminAuth

adminRouter.post("/register", adminAuth, adminController.adminRegister)
adminRouter.post("/login", adminController.adminLogin)

module.exports = adminRouter