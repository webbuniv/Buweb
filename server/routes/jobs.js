import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {
    getAllJobAnnouncements,
    getOpenJobAnnouncements,
    createJobAnnouncement,
    updateJobAnnouncementById,
    deleteJobAnnouncementById,
    getJobAnnouncementById
} from '../controllers/jobs.js';

const router = express.Router();

/* Job Announcements */
router.get("/", getAllJobAnnouncements);
router.get("/open", getOpenJobAnnouncements);
router.post("/create", verifyToken, createJobAnnouncement);
router.patch("/:id/update", verifyToken, updateJobAnnouncementById);
router.delete("/:id/delete", verifyToken, deleteJobAnnouncementById);
router.get("/:id", getJobAnnouncementById);

export default router;
