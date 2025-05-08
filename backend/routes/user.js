const express = require('express');
const router = express.Router();
const { userSchema } = require('../schema');
const userController = require('../controllers/user');
const Joi = require('joi');
const { secureRoute } = require('../middleware/secureRoute');


const validateSchema = (req, res, next) => {
    let { error } = userSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        res.status(400).json({ message: errMsg });

    } else {
        next();
    }
}

router.post('/signup', validateSchema, (userController.signup))
router.post('/login', (userController.login))
router.get('/logout', (userController.logout))






module.exports = router;