import express from "express";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { username, isAdmin, isManager, club, userType, email, password } =
        req.body;

    await userModel.findOne({ email }).catch((err) => {
        res.json({
            status: 409,
            message: "Admin Already Exists",
        });
    });

    await userModel
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
            res.json({ status: 400, message: "Admin Created" });
        })
        .catch((err) => {
            res.json({ status: 424, message: "Admin Creation Failed" });
        });
});

export default router;
