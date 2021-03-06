const express = require("express");
const router = express.Router();

const controller = require("../controllers/staffController");

router.get("/", controller.getAll);
router.get("/:id", controller.getAgeStaff);

router.post("/", controller.postStaff);

router.delete("/:id", controller.deleteStaff);

module.exports = router;
