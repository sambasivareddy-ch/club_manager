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
            eventDate: new Date(eventDate),
            club: eventHeldingClub,
            registerLink,
            eventPageLink
        })
        await clubModel.findByIdAndUpdate(club_id, {
            $push: {
                clubEvents: newEvent
            }
        })
        res.json({
            status: 201,
            message: "Event Added Successfully"
        })
    } catch(err) {
        res.json({
            status: 401,
            message: "Event Creation Failed",
        })
    }
})

export default router;