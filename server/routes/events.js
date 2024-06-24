import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.js';
import {
  getAllEvents,
  createEvent,
  deleteEventById,
  updateEventById,
  getEventById,
} from '../controllers/events.js';
import { cloudinaryController } from '../controllers/cloudinary.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/* Event Routes */
router.get("/", getAllEvents);
router.post("/create", verifyToken, upload.single("coverPhotoUrl"), cloudinaryController.uploadImage, createEvent);
router.get("/:id", getEventById);
router.patch("/:id/update", verifyToken, upload.single("coverPhotoUrl"), cloudinaryController.uploadImage, updateEventById);
router.delete("/:id/delete", verifyToken, deleteEventById);

export default router;
