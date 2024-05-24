import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllSchools, createSchool, deleteSchoolById, updateSchoolById} from '../controllers/school.js'


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllSchools);
router.patch("/:id/update", verifyToken, updateSchoolById)
router.post("/create", verifyToken, createSchool);
router.delete("/:id/delete", verifyToken, deleteSchoolById)

export default router;