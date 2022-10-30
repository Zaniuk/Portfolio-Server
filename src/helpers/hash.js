const bcrypt = require('bcrypt');
const hash = (password) => {
    const hashPassword = bcrypt.hashSync(password, Number(process.env.SALT));
    return hashPassword;
}
module.exports = hash;