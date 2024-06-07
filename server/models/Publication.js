import mongoose from "mongoose";

// Define the main schema
const publicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Array of strings
    required: true,
  },
  writersPhotoUrl: {
    type: String,
    required: true,
  },
  coverPhotoUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
