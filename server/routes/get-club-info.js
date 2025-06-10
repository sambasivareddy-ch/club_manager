import express from 'express';

import clubModel from '../models/club-model.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log("Club ID: ", id);
    await clubModel.findOne({ _id: Object(id) })
    .then(club => {
        res.json({
            status: 201,
            club: club
        })
    })
    .catch(err => {
        res.json({
            status: 401,
            message: "Club Details not found!"
        })
    })
});

export default router;