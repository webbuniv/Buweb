import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {getAllTeamMembers, createTeamMember, deleteTeamMemberById, updateTeamMemberById} from '../controllers/team.js'


const router = express.Router();

/* Slide */
router.get("/", getAllTeamMembers);
router.patch("/:id/update", verifyToken, updateTeamMemberById)
router.post("/create", verifyToken, createTeamMember);
router.delete("/:id/delete", verifyToken, deleteTeamMemberById)

export default router;