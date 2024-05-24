import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllNews, createNews, deleteNewsById, updateNewsById} from '../controllers/news.js'


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllNews);
router.patch("/:id/update", verifyToken, updateNewsById)
router.post("/create", verifyToken, createNews);
router.delete("/:id/delete", verifyToken, deleteNewsById)

export default router;