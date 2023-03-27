import express from 'express';

import eventModel from '../models/event-model';

const router = express.Router();

router.get('/', async (req, res) => {
    await eventModel.find({
        eventDate: {
            $gte: new Date.now()
        }
    })
})

export default router;