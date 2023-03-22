import express from 'express';

import clubModel from '../models/club-model.js';

const router = express.Router()

router.post('/', async (req, res) => {
    const {club_id, about} = req.body;

    await clubModel.findByIdAndUpdate(club_id, {
        $set: {
            aboutClub: about,
        }
    })
    .then((succ) => {
        res.json({
            status: 201,
            message: "About Updated Successfully"
        })
    })
    .catch((err) => {
        res.json({
            status: 403,
            message: "An Error occurred while updating the about"
        })
    })
})

export default router;