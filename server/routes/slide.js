import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllSlides, createSlide, deleteSlideById, updateSlideById} from '../controllers/slide.js'
import multer from "multer";
import { cloudinaryController } from '../controllers/cloudinary.js';
const storage = multer.memoryStorage(); 
const upload = multer({ storage });


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllSlides);
router.patch("/:id/update", verifyToken, updateSlideById)
router.post("/create", upload.single("photo"), cloudinaryController.uploadImage, createSlide);
router.delete("/:id/delete", verifyToken, deleteSlideById)

export default router;