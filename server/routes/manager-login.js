import express from 'express';

import userModel from '../models/user-model.js';

const router = express.Router();

router.all('/', (req, res) => {
    res.send("Manager Login")
})

export default router;