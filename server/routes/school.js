import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.js';
import { cloudinaryController } from '../controllers/cloudinary.js';
import {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchoolById,
  deleteSchoolById
} from '../controllers/schoolController.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/* Schools */
router.get("/", getAllSchools);
router.post("/create", verifyToken, upload.single("photo"), cloudinaryController.uploadImage, createSchool);
router.get("/:id", getSchoolById);
router.patch("/:id/update", verifyToken, upload.single("photo"), cloudinaryController.uploadImage, updateSchoolById);
router.delete("/:id/delete", verifyToken, deleteSchoolById);

export default router;
