import Course from '../models/Course.js';
import Department from '../models/Department.js';
import School from '../models/School.js';
import Lecturer from '../models/Lecturer.js';

export const createCourse = async (req, res) => {
  try {
    const { title, code, schoolId, departmentId, lecturerId } = req.body;

    const newCourse = new Course({
      title,
      code,
      school: schoolId,
      department: departmentId,
      lecturer: lecturerId
    });

    const savedCourse = await newCourse.save();

    await School.findByIdAndUpdate(schoolId, { $push: { courses: savedCourse._id } });
    await Department.findByIdAndUpdate(departmentId, { $push: { courses: savedCourse._id } });
    await Lecturer.findByIdAndUpdate(lecturerId, { $push: { courses: savedCourse._id } });

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find().populate('school').populate('department').populate('lecturer');
    res.status(200).json(allCourses);
  } catch (error) {
    console.error("Error getting courses:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('school').populate('department').populate('lecturer');
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    console.error("Error getting course by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateCourseById = async (req, res) => {
  try {
    const { title, code, lecturerId } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, code, lecturer: lecturerId },
      { new: true }
    ).populate('school').populate('department').populate('lecturer');

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error updating course by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (course) {
      await School.findByIdAndUpdate(course.school, { $pull: { courses: req.params.id } });
      await Department.findByIdAndUpdate(course.department, { $pull: { courses: req.params.id } });
      await Lecturer.findByIdAndUpdate(course.lecturer, { $pull: { courses: req.params.id } });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error("Error deleting course by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
