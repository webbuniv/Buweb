import mongoose from "mongoose";

const CampusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    campus_photo: {
        type: String,
        required: true
    },
    director_photo: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Campus = mongoose.model("Campus", CampusSchema);
export default Campus;
