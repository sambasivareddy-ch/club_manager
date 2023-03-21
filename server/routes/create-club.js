import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { adminId, clubName, noOfMembers, clubType } = req.body;

    await userModel
        .findById(adminId)
        .then((user) => {
            if (!user.isAdmin) {
                res.json({
                    status: 403,
                    message: "No Access",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: 401,
                message: "Invalid Credentials",
            });
        });

    await clubModel
        .create({
            clubName,
            noOfMembers,
            clubType,
            lead: null,
            aboutClub: null,
            members: [],
            clubEvents: [],
        })
        .then((succ) => {
            res.json({
                status: 201,
                message: "Club Added Successfully",
            });
        })
        .catch((err) => {
            res.json({
                status: 424,
                message: "Failed to add club",
            });
        });
});

export default router;
