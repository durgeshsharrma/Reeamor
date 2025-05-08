const user = require('../models/user')
const bcrypt = require('bcrypt');
const { generateToken } = require('../JWT/generateToken');

module.exports.signup = async(req , res) => {
    try {
        console.log(req.body , 'aya hua data hu me');
         
        
        //check for already exist
        let alreadyExist = await user.findOne({email : req.body.email});
        if(alreadyExist){
            return res.status(400).send({error : 'User already exist'});
        }

        //check for password same or not
        if(req.body.password !== req.body.confirmPassword){
            return res.status(400).send({error : 'Password and Confirm Password should be same'});
        }

        //hashPassword
        let hasPassword = await bcrypt.hash(req.body.password , 12);
        req.body.password = hasPassword;
        req.body.confirmPassword = hasPassword;

        //create user
        let newUserToAdd = new user(req.body);
        await newUserToAdd.save();
        if(newUserToAdd){
            generateToken(newUserToAdd._id , res);
        }
        res.status(200).send({message : 'User Created Successfully' , user : {
            email : newUserToAdd.email,
            firstName : newUserToAdd.firstName,
            _id : newUserToAdd._id
        }});



    }catch(err){

        console.log(err);
        res.status(500).json({message : 'Internal Server Error'});

    }
}


module.exports.login = async (req, res) => {
    try {
        console.log(req.body)

        let { email, password } = req.body;
        let findUser = await user.findOne({ email });
        if (!findUser) {
            return res.status(400).send({ error: 'User not found' });
        }
        console.log(password)
        let isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }
        generateToken(findUser._id, res);
        res.status(200).json({
            message: 'Login Successfully', user: {
                email: findUser.email,
                firstName: findUser.firstName,
                _id: findUser._id
            }
        });
    }
    catch (err) {
        console.log(err, 'yaha hu me error login me');
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports.logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).send({ message: 'Logout Successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}