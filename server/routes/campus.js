import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllCampuses, createCampus, updateCampusById, deleteCampusById} from '../controllers/campus.js'


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllCampuses);
router.patch("/:id/update", verifyToken, updateCampusById)
router.post("/create", verifyToken, createCampus);
router.delete("/:id/delete", verifyToken, deleteCampusById)

export default router;