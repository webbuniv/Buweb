import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    image_url: {
        type: String
    },
    social_twitter: {
        type: String
    },
    social_facebook: {
        type: String
    },
    social_instagram: {
        type: String
    },
    social_linkedin: {
        type: String
    },
    bio: {
        type: String
    },
    quote: {
        type: String
    }
});

const Team = mongoose.model("Team", TeamSchema);
export default Team;
