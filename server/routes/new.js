import express from "express";
import {
  createNews,
  getAllNews,
  getNewsById,
  updateNewsById,
  deleteNewsById,
} from "../controllers2/newsController.js";

import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

const router = express.Router();

// Create news
router.post("/create", upload.single("photo"), createNews);

// Get all news
router.get("/", getAllNews);

// Get news by ID
router.get("/:id", getNewsById);

// Update news by ID
router.put("/:id", upload.single("photo"), updateNewsById);

// Delete news by ID
router.delete("/:id", deleteNewsById);

export default router;
