import express from "express";

import clubModel from "../models/club-model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    await clubModel
        .find({})
        .populate("lead")
        .populate("members")
        .populate("clubEvents")
        .then((clubs) => {
            res.json({
                status: 200,
                clubs: clubs,
            });
        })
        .catch((err) => {
            res.json({
                status: 400,
                message: "Cannot get the clubs",
            });
        });
});

export default router;
