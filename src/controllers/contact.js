const {Contact} = require("../../models");

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createContact = async (req, res) => {
    const {name, email, message} = req.body;
    try {
        const contact = await Contact.create({
            name,
            email,
            message
        });
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteContact = async (req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Contact.destroy({
            where: {id}
        });
        if (deleted) {
            res.status(204).send("Contact deleted");
        }
        throw new Error("Contact not found");
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createContact,
    deleteContact,
    getContacts
}
