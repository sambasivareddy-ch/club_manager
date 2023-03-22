import express from 'express';

import clubModel from '../models/club-model.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const {club_id} = req.params.id;

    await clubModel.findById(club_id)
    .then(club => {
        res.json({
            message: 201,
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