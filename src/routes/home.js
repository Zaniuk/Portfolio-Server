const express = require("express");
const router = express.Router();
const {getHome, updateHome} = require("../controllers/home");
const { verifyToken } = require("../middlewares/auth");

router.get("/", getHome);
router.put("/", verifyToken,updateHome);

module.exports = router;
