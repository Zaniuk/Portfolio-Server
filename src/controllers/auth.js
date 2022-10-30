const {Admin} = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    const {email, password} = req.body;
    const admin = await Admin.findOne({where: {email}});
    if (!admin) {
        return res.status(400).json({message: 'Invalid credentials'});
    }
    const validPassword = bcrypt.compareSync(password, admin.password);
    if (!validPassword) {
        return res.status(400).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign({id: admin.id}, process.env.TOKEN_SECRET, {expiresIn: '1h'});
    res.json({token});
}

module.exports = {
    login
}
