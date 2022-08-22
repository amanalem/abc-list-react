const router = require("express").Router();
const listCtrl = require("../controllers/listCtrl");

// index
router.get("/", listCtrl.index);

// create
router.post("/", listCtrl.create);

// update
router.put("/:id/:letter", listCtrl.update);

// delete
router.delete("/:id/:letter", listCtrl.delete);

module.exports = router;
