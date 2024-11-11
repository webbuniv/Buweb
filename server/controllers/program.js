import Program from '../models/Program.js';
import Department from '../models/Department.js';
import School from '../models/School.js';

// Create a new Program
export const createProgram = async (req, res) => {
  try {
    const { name, code, schoolId, departmentId } = req.body;

    const newProgram = new Program({
      name,
      code,
      school: schoolId,
      department: departmentId
    });

    const savedProgram = await newProgram.save();

    // Update related documents
    await School.findByIdAndUpdate(schoolId, { $push: { programs: savedProgram._id } });
    await Department.findByIdAndUpdate(departmentId, { $push: { programs: savedProgram._id } });

    res.status(201).json(savedProgram);
  } catch (error) {
    console.error("Error creating program:", error);
    res.status(409).json({ message: error.message });
  }
};

// Get all Programs
export const getAllPrograms = async (req, res) => {
  try {
    const allPrograms = await Program.find()
      .populate('school')
      .populate('department');
    res.status(200).json(allPrograms);
  } catch (error) {
    console.error("Error getting programs:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a Program by ID
export const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id)
      .populate('school')
      .populate('department');
    if (!program) {
      res.status(404).json({ message: "Program not found" });
      return;
    }
    res.status(200).json(program);
  } catch (error) {
    console.error("Error getting program by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update a Program by ID
export const updateProgramById = async (req, res) => {
  try {
    const { name, code, schoolId, departmentId } = req.body;

    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.id,
      { name, code, school: schoolId, department: departmentId },
      { new: true }
    ).populate('school').populate('department');

    res.status(200).json(updatedProgram);
  } catch (error) {
    console.error("Error updating program by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a Program by ID
export const deleteProgramById = async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    if (deletedProgram) {
      await School.findByIdAndUpdate(deletedProgram.school, { $pull: { programs: req.params.id } });
      await Department.findByIdAndUpdate(deletedProgram.department, { $pull: { programs: req.params.id } });
    }
    res.status(200).json(deletedProgram);
  } catch (error) {
    console.error("Error deleting program by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
