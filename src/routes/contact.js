const express = require("express");
const { getContacts, deleteContact, createContact } = require("../controllers/contact");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
router.get('/', verifyToken ,getContacts)
router.post('/', createContact)
router.delete('/:id',verifyToken , deleteContact)

module.exports = router;