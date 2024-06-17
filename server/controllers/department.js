import Department from '../models/Department.js';
import School from '../models/School.js';
import Lecturer from '../models/Lecturer.js';
import Program from '../models/Program.js';

// Create a new Department
export const createDepartment = async (req, res) => {
  try {
    const { name, schoolId, lecturers, programs } = req.body;

    const newDepartment = new Department({
      name,
      school: schoolId,
      lecturers: lecturers || [],
      programs: programs || []
    });

    const savedDepartment = await newDepartment.save();

    // Update related documents
    await School.findByIdAndUpdate(schoolId, { $push: { departments: savedDepartment._id } });
    await Lecturer.updateMany({ _id: { $in: lecturers } }, { $set: { department: savedDepartment._id } });
    await Program.updateMany({ _id: { $in: programs } }, { $set: { department: savedDepartment._id } });

    res.status(201).json(savedDepartment);
  } catch (error) {
    console.error("Error creating department:", error);
    res.status(409).json({ message: error.message });
  }
};

// Get all Departments
export const getAllDepartments = async (req, res) => {
  try {
    const allDepartments = await Department.find()
      .populate('school')
      .populate('lecturers')
      .populate('programs');
    res.status(200).json(allDepartments);
  } catch (error) {
    console.error("Error getting departments:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a Department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id)
      .populate('school')
      .populate('lecturers')
      .populate('programs');
    if (!department) {
      res.status(404).json({ message: "Department not found" });
      return;
    }
    res.status(200).json(department);
  } catch (error) {
    console.error("Error getting department by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update a Department by ID
export const updateDepartmentById = async (req, res) => {
  try {
    const { name, schoolId, lecturers, programs } = req.body;

    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      { name, school: schoolId, lecturers, programs },
      { new: true }
    ).populate('school').populate('lecturers').populate('programs');

    // Update related documents
    await Lecturer.updateMany({ _id: { $in: lecturers } }, { $set: { department: updatedDepartment._id } });
    await Program.updateMany({ _id: { $in: programs } }, { $set: { department: updatedDepartment._id } });

    res.status(200).json(updatedDepartment);
  } catch (error) {
    console.error("Error updating department by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a Department by ID
export const deleteDepartmentById = async (req, res) => {
  try {
    const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
    if (deletedDepartment) {
      await School.findByIdAndUpdate(deletedDepartment.school, { $pull: { departments: req.params.id } });
      await Lecturer.updateMany({ _id: { $in: deletedDepartment.lecturers } }, { $unset: { department: "" } });
      await Program.updateMany({ _id: { $in: deletedDepartment.programs } }, { $unset: { department: "" } });
    }
    res.status(200).json(deletedDepartment);
  } catch (error) {
    console.error("Error deleting department by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
