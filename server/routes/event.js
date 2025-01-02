import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEventById,
  deleteEventById,
} from "../controllers2/eventsController.js";

import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

const router = express.Router();

// Create an event
router.post("/create", upload.single("coverPhoto"), createEvent);

// Get all events
router.get("/", getAllEvents);

// Get an event by ID
router.get("/:id", getEventById);

// Update an event by ID
router.put("/:id", upload.single("coverPhoto"), updateEventById);

// Delete an event by ID
router.delete("/:id", deleteEventById);

export default router;
