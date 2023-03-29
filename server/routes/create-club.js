import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { adminId, clubName, noOfMembers, clubType } = req.body;
    const admin = await userModel.findById(adminId);

    if (admin && admin.isAdmin) {
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
                    error: err
                });
            });
    } else {
        res.status(424).json({
            status: 424,
            message: "No Access",
        });
    }
});

export default router;
