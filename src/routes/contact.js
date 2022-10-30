const express = require("express");
const { getContacts, deleteContact, createContact } = require("../controllers/contact");
const router = express.Router();

router.get('/', getContacts)
router.post('/', createContact)
router.delete('/:id', deleteContact)

module.exports = router;