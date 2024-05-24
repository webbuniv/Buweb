import mongoose from "mongoose";

const SlidesSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    }
});

const Slide = mongoose.model("Slide", SlidesSchema);
export default Slide;
