const express = require("express");
const router = express.Router();

const { login, authMe } = require("../controllers/auth");

router.post("/login", login);
router.get('/me', authMe);

module.exports = router;
