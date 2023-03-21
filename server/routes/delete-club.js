import express from "express";

import clubModel from "../models/club-model.js";
import userModel from "../models/user-model.js";

const router = express.Router();

router.delete("/", async (req, res) => {
    const { clubId } = req.body;
    await userModel.updateMany({ club: clubId }, [
        {
            $set: {
                club: null,
            },
        },
    ]);
    await clubModel
        .findByIdAndDelete(clubId)
        .then((succ) =>
            res.json({
                status: 204,
                message: "Club Successfully removed",
            })
        )
        .catch((err) =>
            res.json({
                status: 401,
                message: "Deletion Failed",
            })
        );
});

export default router;
