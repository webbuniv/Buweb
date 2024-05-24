import Campus from '../models/Campus.js';
import { cloudinaryController } from './cloudinary.js'; // Importing Cloudinary controller

export const createCampus = async (req, res) => {
  try {
    const { name, director, number, email, location } = req.body;
    let campus_photo = ''; 
    let director_photo = '';

    if (req.files) {
      await Promise.all([
        cloudinaryController.uploadImage(req, res, async () => {
          campus_photo = req.picturePath;
        }),
        cloudinaryController.uploadImage(req, res, async () => {
          director_photo = req.picturePath;
        })
      ]);
    }

    const newCampus = new Campus({
      name,
      director,
      number,
      email,
      location,
      campus_photo,
      director_photo
    });

    const savedCampus = await newCampus.save();
    res.status(201).json(savedCampus);
  } catch (error) {
    console.error("Error creating campus:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllCampuses = async (req, res) => {
  try {
    const allCampuses = await Campus.find();
    res.status(200).json(allCampuses);
  } catch (error) {
    console.error("Error getting campuses:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getCampusById = async (req, res) => {
  try {
    const campus = await Campus.findById(req.params.id);
    if (!campus) {
      res.status(404).json({ message: "Campus not found" });
      return;
    }
    res.status(200).json(campus);
  } catch (error) {
    console.error("Error getting campus by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateCampusById = async (req, res) => {
  try {
    const { name, director, number, email, location } = req.body;
    let campus_photo = ''; 
    let director_photo = ''; // Initialize director_photo variable

    // Check if there are files attached for campus_photo and director_photo
    if (req.files) {
      // If files are present, upload them to Cloudinary
      await Promise.all([
        cloudinaryController.uploadImage(req, res, async () => {
          // If upload is successful, get the campus photo URL
          campus_photo = req.picturePath;
        }),
        cloudinaryController.uploadImage(req, res, async () => {
          // If upload is successful, get the director photo URL
          director_photo = req.picturePath;
        })
      ]);
    }

    const updatedCampus = await Campus.findByIdAndUpdate(
      req.params.id,
      { name, director, number, email, location, campus_photo, director_photo },
      { new: true }
    );
    res.status(200).json(updatedCampus);
  } catch (error) {
    console.error("Error updating campus by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteCampusById = async (req, res) => {
  try {
    const deletedCampus = await Campus.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCampus);
  } catch (error) {
    console.error("Error deleting campus by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
