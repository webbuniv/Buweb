import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getUsers} from '../controllers/users.js'


const router = express.Router();

/* Users */
router.get("/", verifyToken, getAllSlides);

export default router;