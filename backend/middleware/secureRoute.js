const jwt = require('jsonwebtoken')
const User = require('../models/user')



module.exports.secureRoute = async(req , res , next) => {
    try{
        console.log(req.cookies , "i am cookie")
        const token = req.cookies.jwt;
        console.log(token , "i am a token")
        if(!token) {
            return res.status(401).json({error : "Unauthorized" })
        }
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        if(!decoded)
        {
            return res.status(401).json({error : "Invalid Token" })
        }

        const user = await User.findById(decoded.userId).select('-password');
        if(!user)
        {
            return res.status(401).json({error : "User Not Found" })
        }

        req.user = user;
        next();

    }catch(err)
    {
        console.log('error in userRoute')
        res.status(500).json({error : 'internal server error'})
    }
}