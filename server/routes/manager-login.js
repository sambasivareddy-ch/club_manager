import express from 'express';

import userModel from '../models/user-model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const {email, password} = req.body;

    try {
        const manager = await userModel.findOne({email: email})
        if (manager.password !== password) {
            res.json({
                status: 401,
                message: "Invalid Credentials"
            })
        }else {
            res.json({
                status: 201,
                message: "Successfully Loggedin"
            })
        }
    }catch(err) {
        res.json({
            status: 401,
            message: "Login Unsuccessful",
        })
    }
    
})

export default router;