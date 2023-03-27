import express from 'express';

import eventModel from '../models/event-model.js';
import clubModel from '../models/club-model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const {eventName, aboutEvent, eventDate, club_id, registerLink, eventPageLink } = req.body;

    const eventHeldingClub = await clubModel.findById(club_id);

    try {
        const newEvent = await eventModel.create({
            eventName,
            aboutEvent,
            eventDate,
            hostClub: eventHeldingClub,
            registerLink,
            eventPageLink
        })
    } catch(err) {
        res.json({
            status: 401,
            message: "Event Creation Failed",
        })
    }

    await clubModel.findByIdAndUpdate(club_id, {
        $push: {
            clubEvents: newEvent
        }
    })
    .then((succ) => {
        res.json({
            status: 201,
            message: "Event Added Successfully"
        })
    })
    .catch((err) => {
        res.json({
            status: 401,
            message: "Event Creation Unsuccessful"
        })
    })
})

export default router;