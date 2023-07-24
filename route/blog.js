const router = require("express").Router()
const controller = require("../controller/postController")
const auth = require("../middleware/auth").auth
const adminAuth = require("../middleware/adminAuth").adminAuth

router.get("/", auth, controller.read)
router.get("/:id", auth, controller.readById)

router.post("/", adminAuth, controller.create)
router.put("/:id", adminAuth, controller.update)
router.delete("/:id", adminAuth, controller.delete)

module.exports = router