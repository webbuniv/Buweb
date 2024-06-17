import Lecturer from '../models/Lecturer.js';
import Department from '../models/Department.js';
import School from '../models/School.js';

// Create a new Lecturer
export const createLecturer = async (req, res) => {
  try {
    const { name, title, departmentId, schoolId } = req.body;

    const newLecturer = new Lecturer({
      name,
      title,
      department: departmentId,
      school: schoolId
    });

    const savedLecturer = await newLecturer.save();

    // Update related documents
    await School.findByIdAndUpdate(schoolId, { $push: { lecturers: savedLecturer._id } });
    await Department.findByIdAndUpdate(departmentId, { $push: { lecturers: savedLecturer._id } });

    res.status(201).json(savedLecturer);
  } catch (error) {
    console.error("Error creating lecturer:", error);
    res.status(409).json({ message: error.message });
  }
};

// Get all Lecturers
export const getAllLecturers = async (req, res) => {
  try {
    const allLecturers = await Lecturer.find()
      .populate('school')
      .populate('department');
    res.status(200).json(allLecturers);
  } catch (error) {
    console.error("Error getting lecturers:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a Lecturer by ID
export const getLecturerById = async (req, res) => {
  try {
    const lecturer = await Lecturer.findById(req.params.id)
      .populate('school')
      .populate('department');
    if (!lecturer) {
      res.status(404).json({ message: "Lecturer not found" });
      return;
    }
    res.status(200).json(lecturer);
  } catch (error) {
    console.error("Error getting lecturer by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update a Lecturer by ID
export const updateLecturerById = async (req, res) => {
  try {
    const { name, title, departmentId, schoolId } = req.body;

    const updatedLecturer = await Lecturer.findByIdAndUpdate(
      req.params.id,
      { name, title, department: departmentId, school: schoolId },
      { new: true }
    ).populate('school').populate('department');

    res.status(200).json(updatedLecturer);
  } catch (error) {
    console.error("Error updating lecturer by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a Lecturer by ID
export const deleteLecturerById = async (req, res) => {
  try {
    const deletedLecturer = await Lecturer.findByIdAndDelete(req.params.id);
    if (deletedLecturer) {
      await School.findByIdAndUpdate(deletedLecturer.school, { $pull: { lecturers: req.params.id } });
      await Department.findByIdAndUpdate(deletedLecturer.department, { $pull: { lecturers: req.params.id } });
    }
    res.status(200).json(deletedLecturer);
  } catch (error) {
    console.error("Error deleting lecturer by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
