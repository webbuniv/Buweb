import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllSlides, createSlide, deleteSlideById, updateSlideById} from '../controllers/slide.js'


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllSlides);
router.patch("/:id/update", verifyToken, updateSlideById)
router.post("/create", verifyToken, createSlide);
router.delete("/:id/delete", verifyToken, deleteSlideById)

export default router;