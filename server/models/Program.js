import mongoose from "mongoose";

const ProgramsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

const Program = mongoose.model("Program", ProgramsSchema);
export default Program;
