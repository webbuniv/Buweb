import express from 'express';
import { getAllLecturers, createLecturer, getLecturerById, updateLecturerById, deleteLecturerById } from '../controllers/lecturerController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getAllLecturers);
router.post("/create", verifyToken, createLecturer);
router.get("/:id", getLecturerById);
router.patch("/:id/update", verifyToken, updateLecturerById);
router.delete("/:id/delete", verifyToken, deleteLecturerById);

export default router;
