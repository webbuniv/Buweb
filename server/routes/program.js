import express from 'express';
import { getAllPrograms, createProgram, getProgramById, updateProgramById, deleteProgramById } from '../controllers/programController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getAllPrograms);
router.post("/create", verifyToken, createProgram);
router.get("/:id", getProgramById);
router.patch("/:id/update", verifyToken, updateProgramById);
router.delete("/:id/delete", verifyToken, deleteProgramById);

export default router;
