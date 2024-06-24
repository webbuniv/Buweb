import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  head: {
    type: String,
    required: true
  },
  lecturers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecturer'
  }],
  programs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  }]
});

const Department = mongoose.model("Department", DepartmentSchema);
export default Department;
