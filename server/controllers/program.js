import { cloudinaryController } from './cloudinary.js';
import Program from '../models/Program.js';

export const createProgram = async (req, res) => {
  try {
    const { name, overview, duration, requirements, department } = req.body;
    const newProgram = new Program({ name, overview, duration, requirements, department });

    if (req.file) {
      await cloudinaryController.uploadImage(req, res, async () => {
        newProgram.photo = req.picturePath;
        await newProgram.save();
        res.status(201).json(newProgram);
      });
    } else {
      await newProgram.save();
      res.status(201).json(newProgram);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProgram = async (req, res) => {
  try {
    const allProgram = await Program.find();
    res.status(200).json(allProgram);
  } catch (error) {
    console.error("Error getting slides:", error);
    res.status(500).json({ message: error.message });
  }
};


export const updateProgramById = async (req, res) => {
  try {
    const { name, overview, duration, requirements, department } = req.body;
    const updatedProgramData = { name, overview, duration, requirements, department };
    if (req.file) {
      await cloudinaryController.uploadImage(req, res, async () => {
        updatedProgramData.photo = req.picturePath;
        const updatedProgram = await Program.findByIdAndUpdate(req.params.id, updatedProgramData, { new: true });
        res.status(200).json(updatedProgram);
      });
    } else {
      const updatedProgram = await Program.findByIdAndUpdate(req.params.id, updatedProgramData, { new: true });
      res.status(200).json(updatedProgram);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProgramById = async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProgram);
  } catch (error) {
    console.error("Error deleting slide by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
