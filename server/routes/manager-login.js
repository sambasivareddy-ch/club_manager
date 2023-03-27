import express from 'express';

import userModel from '../models/user-model.js';

const router = express.Router();

router.get('/:email/:password', async (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    try {
        const manager = await userModel.findOne({email: email})
        if (manager.password !== password) {
            res.json({
                status: 401,
                message: "Invalid Credentials"
            })
        } else {
            res.json({
                status: 201,
                club_id: manager.club,
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