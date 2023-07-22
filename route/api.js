const router = require("express").Router()
const controller = require("../controller")

router.post("/",controller.create)
router.get("/",controller.read)
router.get("/:id",controller.readById)
router.put("/:id",controller.update)
router.put("/update/:id",controller.updateOne)
router.delete("/", controller.delete)

module.exports = router