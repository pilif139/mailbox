import express from 'express';

import { RegisterUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', RegisterUser);
router.get('login', (req, res) => {
    res.send('login page');
});

export default router;