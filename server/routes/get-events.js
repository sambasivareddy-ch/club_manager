import express from 'express';

import eventModel from '../models/event-model';

const router = express.Router();

router.get('/', async (req, res) => {
    await eventModel.populate('club').find({
        eventDate: {
            $gte: new Date.now()
        }
    }).then(evnts => res.json({
        status: 200,
        events: evnts
    })).catch(err => res.json({
        status: err.status,
        message: 'An Error Occurred'
    }))
})

export default router;