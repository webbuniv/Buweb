import mongoose from "mongoose";

const LecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  }
});

const Lecturer = mongoose.model("Lecturer", LecturerSchema);
export default Lecturer;
