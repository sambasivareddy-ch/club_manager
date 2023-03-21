import express from "express";

import userModel from "../models/user-model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const { email, password } = req.body;
    await userModel
        .findOne({ email })
        .then((user) => {
            const userPassword = user.password;
            if (userPassword === password && user.isAdmin) {
                res.json({
                    status: 200,
                    adminId: user._id,
                    message: "Successfully Loggedin",
                });
            } else {
                res.json({
                    status: 401,
                    message: "Invalid Credentials",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: 404,
                message: "Admin Not exists",
            });
        });
});

export default router;
