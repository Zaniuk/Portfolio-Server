const express = require("express");
const router = express.Router();
const {getHome, updateHome} = require("../controllers/home");

router.get("/", getHome);
router.put("/", updateHome);

module.exports = router;
