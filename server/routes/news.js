import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.js';
import {getAllNews, createNews, deleteNewsById, updateNewsById, getNewsById} from '../controllers/news.js';
import { cloudinaryController } from '../controllers/cloudinary.js';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/* Slide */
router.get("/", getAllNews);
router.post("/create", verifyToken, upload.single("photo"), cloudinaryController.uploadImage, createNews);
router.patch("/:id/update", verifyToken, upload.single("photo"), cloudinaryController.uploadImage, updateNewsById);
router.delete("/:id/delete", verifyToken, deleteNewsById)
router.get("/:id", getNewsById);

export default router;