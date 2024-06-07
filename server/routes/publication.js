import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/auth.js';
import {
  getAllPublications,
  createPublication,
  deletePublicationById,
  updatePublicationById,
  getPublicationById,
} from '../controllers/publication.js';
import { uploadImage } from '../controllers/cloudinary.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

/* Publication Routes */
router.get("/", verifyToken, getAllPublications);
router.post("/create", upload.fields([{ name: 'writersPhoto' }, { name: 'coverPhoto' }]), uploadImage, createPublication);
router.get("/:id", verifyToken, getPublicationById);
router.patch("/:id/update", verifyToken, upload.fields([{ name: 'writersPhoto' }, { name: 'coverPhoto' }]), uploadImage, updatePublicationById);
router.delete("/:id/delete", verifyToken, deletePublicationById);

export default router;
