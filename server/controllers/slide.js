import Slide from '../models/Slide.js'; 
import { cloudinaryController } from './cloudinary.js'; 

export const createSlide = async (req, res) => {
  try {
    const { 
      title, 
      tagline 
    } = req.body;
    const photo = req.picturePath; // Get the photo URL from the request

    const newSlide = new Slide({
      photo,
      title,
      tagline
    });

    const savedSlide = await newSlide.save();
    res.status(201).json(savedSlide);
  } catch (error) {
    console.error("Error creating slide:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllSlides = async (req, res) => {
  try {
    const allSlides = await Slide.find();
    res.status(200).json(allSlides);
  } catch (error) {
    console.error("Error getting slides:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getSlideById = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (!slide) {
      res.status(404).json({ message: "Slide not found" });
      return;
    }
    res.status(200).json(slide);
  } catch (error) {
    console.error("Error getting slide by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateSlideById = async (req, res) => {
  try {
    const { photo, title, tagline } = req.body;
    let photoUrl = ''; // Initialize photoUrl variable

    // Check if there is a file attached for photo
    if (req.file) {
      // If file is present, upload it to Cloudinary
      await cloudinaryController.uploadImage(req, res, async () => {
        // If upload is successful, get the photo URL
        photoUrl = req.picturePath;
      });
    }

    const updatedSlide = await Slide.findByIdAndUpdate(
      req.params.id,
      { photo: photoUrl, title, tagline },
      { new: true }
    );
    res.status(200).json(updatedSlide);
  } catch (error) {
    console.error("Error updating slide by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteSlideById = async (req, res) => {
  try {
    const deletedSlide = await Slide.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSlide);
  } catch (error) {
    console.error("Error deleting slide by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
