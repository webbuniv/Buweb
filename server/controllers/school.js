import School from '../models/School.js';
import { cloudinaryController } from './cloudinary.js';

export const createSchool = async (req, res) => {
  try {
    const { name, preamble, goal, dean, deans, message } = req.body;
    let photo = '';

    if (req.file) {
      await cloudinaryController.uploadImage(req, res, async () => {
        photo = req.picturePath;
      });
    }

    const newSchool = new School({
      name,
      preamble,
      goal,
      photo,
      dean,
      deans,
      message
    });

    const savedSchool = await newSchool.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    console.error("Error creating school:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllSchools = async (req, res) => {
  try {
    const allSchools = await School.find();
    res.status(200).json(allSchools);
  } catch (error) {
    console.error("Error getting schools:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      res.status(404).json({ message: "School not found" });
      return;
    }
    res.status(200).json(school);
  } catch (error) {
    console.error("Error getting school by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateSchoolById = async (req, res) => {
  try {
    const { name, preamble, goal, dean, deans, message } = req.body;
    let photo = '';
    if (req.file) {
      await cloudinaryController.uploadImage(req, res, async () => {
        photo = req.picturePath;
      });
    }

    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      { name, preamble, goal, photo, dean, deans, message },
      { new: true }
    );
    res.status(200).json(updatedSchool);
  } catch (error) {
    console.error("Error updating school by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteSchoolById = async (req, res) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSchool);
  } catch (error) {
    console.error("Error deleting school by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
