const router = require("express").Router()
const controller = require("../controller/postController")
const auth = require("../middleware/auth").auth

router.post("/", controller.create)
router.get("/", auth, controller.read)
router.get("/:id", auth, controller.readById)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

module.exports = router