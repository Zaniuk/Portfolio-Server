const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const header = req.headers['Authorization'] || req.headers['authorization'];
    const token = header && header.split(' ')[1];
    if(!token) {
        return res.status(401).json({message: 'Access denied'});
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified
        next();
    } catch (error) {
        console.log(token)
        res.status(400).json({message: 'Invalid token'});
    }

}

module.exports = {
    verifyToken
}
