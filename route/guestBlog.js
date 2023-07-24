const guestRouter = require("express").Router()
const controller = require("../controller/guestPostController")
const auth = require("../middleware/auth").auth
const adminAuth = require("../middleware/adminAuth").adminAuth

guestRouter.get("/", controller.read)
guestRouter.get("/:id", controller.readById)

guestRouter.post("/", adminAuth, controller.create)
guestRouter.put("/:id", adminAuth, controller.update)
guestRouter.delete("/:id", adminAuth, controller.delete)

module.exports = guestRouter