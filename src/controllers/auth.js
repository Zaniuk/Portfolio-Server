const {Admin} = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = async (req, res, _next) => {
    const { email, password } = req.body;
    if(email && password) {
      const user = await Admin.findOne({where: {email: email}})
      if(user) {
        const isValidUser = bcrypt.compareSync(password, user.password)
        if(isValidUser){

          const token = jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn: '2d'}) 
          res.status(200).send({
            Authorization: token,
            user: user
          }).end();
        }else{
          res.status(400).send('Password is wrong')
        }
      }else{
        res.status(400).send('Email not found')
      }
    }
}
module.exports = {
    login
}
