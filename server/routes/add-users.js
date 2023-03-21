import express from "express";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, isAdmin, isManager, club, userType, email, password } =
        req.body;

    const user = await userModel.findOne({ email });

    if (user) {
        res.status(409).json({
            status: 409,
            message: "User Already Exists",
        });
    } else {
        userModel
            .create({
                username,
                isAdmin,
                isManager,
                club,
                userType,
                email,
                password,
            })
            .then((success) => {
                res.json({ status: 400, message: "User Created" });
            })
            .catch((err) => {
                res.json({ status: 424, message: "Creation Failed" });
            });
    }
});

export default router;
