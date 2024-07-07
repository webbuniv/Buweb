import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.js';
import {getAllTeamMembers, createTeamMember, deleteTeamMemberById, updateTeamMemberById, getTeamMemberById} from '../controllers/team.js'
import { cloudinaryController } from '../controllers/cloudinary.js';
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/* Slide */
router.get("/", getAllTeamMembers);
router.get("/:id", getTeamMemberById);
router.patch("/:id/update", verifyToken, updateTeamMemberById)
router.post("/create", verifyToken, upload.single("image_url"), cloudinaryController.uploadImage, createTeamMember);
router.delete("/:id/delete", verifyToken, deleteTeamMemberById)

export default router;