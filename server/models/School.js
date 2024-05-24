import mongoose from "mongoose";
const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    preamble: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    dean: {
        type: String,
        required: true
    },
    deans: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const School = mongoose.model("School", SchoolSchema);
export default  School;
