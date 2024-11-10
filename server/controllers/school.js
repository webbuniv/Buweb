import School from '../models/School.js';
import Department from '../models/Department.js';
import Lecturer from '../models/Lecturer.js';
import Program from '../models/Program.js';

// Create a new School
export const createSchool = async (req, res) => {
  try {
    const { name, preamble, goal, dean, deans, message, departments, lecturers, programs } = req.body;
    const photo = req.picturePath;

    const newSchool = new School({
      name,
      preamble,
      goal,
      photo,
      dean,
      message,
      departments: departments || [],
      lecturers: lecturers || [],
      programs: programs || []
    });

    const savedSchool = await newSchool.save();

    // Update related documents
    await Department.updateMany({ _id: { $in: departments } }, { $set: { school: savedSchool._id } });
    await Lecturer.updateMany({ _id: { $in: lecturers } }, { $set: { school: savedSchool._id } });
    await Program.updateMany({ _id: { $in: programs } }, { $set: { school: savedSchool._id } });

    res.status(201).json(savedSchool);
  } catch (error) {
    console.error("Error creating school:", error);
    res.status(409).json({ message: error.message });
  }
};

// Get all Schools
export const getAllSchools = async (req, res) => {
  try {
    const allSchools = await School.find()
      .populate('departments')
      .populate('lecturers')
      .populate('programs');
    res.status(200).json(allSchools);
  } catch (error) {
    console.error("Error getting schools:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a School by ID
export const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id)
      .populate('departments')
      .populate('lecturers')
      .populate('programs');
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

// Update a School by ID
export const updateSchoolById = async (req, res) => {
  try {
    const { name, preamble, goal, dean, deans, message, departments, lecturers, programs } = req.body;
    const photo = req.picturePath;

    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      { name, preamble, goal, photo, dean, deans, message, departments, lecturers, programs },
      { new: true }
    ).populate('departments').populate('lecturers').populate('programs');

    // Update related documents
    await Department.updateMany({ _id: { $in: departments } }, { $set: { school: updatedSchool._id } });
    await Lecturer.updateMany({ _id: { $in: lecturers } }, { $set: { school: updatedSchool._id } });
    await Program.updateMany({ _id: { $in: programs } }, { $set: { school: updatedSchool._id } });

    res.status(200).json(updatedSchool);
  } catch (error) {
    console.error("Error updating school by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a School by ID
export const deleteSchoolById = async (req, res) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);
    if (deletedSchool) {
      await Department.updateMany({ _id: { $in: deletedSchool.departments } }, { $unset: { school: "" } });
      await Lecturer.updateMany({ _id: { $in: deletedSchool.lecturers } }, { $unset: { school: "" } });
      await Program.updateMany({ _id: { $in: deletedSchool.programs } }, { $unset: { school: "" } });
    }
    res.status(200).json(deletedSchool);
  } catch (error) {
    console.error("Error deleting school by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
