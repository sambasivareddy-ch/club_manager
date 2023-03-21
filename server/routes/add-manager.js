import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { clubId, managerEmail } = req.body;

    await userModel.findOneAndUpdate(
        { email: managerEmail },
        {
            $set: { club: clubId, isManager: true },
        }
    );

    await clubModel
        .findByIdAndUpdate(clubId, {
            $set: {
                hadManager: true,
                lead: await userModel.findOne({ email: managerEmail }),
            },
        })
        .then((succ) => {
            res.json({
                status: 200,
                message: "Manager Added",
            });
        })
        .catch((err) => {
            res.json({
                status: 400,
                message: "Error occurred while adding manager",
            });
        });
});

export default router;
