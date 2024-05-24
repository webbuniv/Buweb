import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllProgram, createProgram, updateProgramById, deleteProgramById } from '../controllers/program.js'


const router = express.Router();

/* Slide */
router.get("/", verifyToken, getAllProgram);
router.patch("/:id/update", verifyToken, updateProgramById)
router.post("/create", verifyToken, createProgram);
router.delete("/:id/delete", verifyToken, deleteProgramById)

export default router;