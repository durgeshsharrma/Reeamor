const jwt = require('jsonwebtoken');
// const User = require('../models/user');




module.exports.generateToken = async (userId, res) => {


    let token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '10d' });
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
        secure: false,
        sameSite: 'None'
    });
    console.log(token);



}



