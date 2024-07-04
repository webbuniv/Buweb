import mongoose from "mongoose";

const JobAnnouncementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    numberOfPositions: {
        type: Number,
        required: true
    },
    responsibleTo: {
        type: String,
        required: true,
        trim: true
    },
    termsOfEmployment: {
        type: String,
        required: true,
        trim: true
    },
    purposeOfJob: {
        type: String,
        required: true,
        trim: true
    },
    minimumQualifications: {
        type: [String],
        required: true,
        default: []
    },
    additionalRequirements: {
        type: [String],
        default: []
    },
    immediateContact: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'done'],
        default: 'open'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

JobAnnouncementSchema.pre('find', function(next) {
    this.find().forEach(job => {
        if (job.deadline <= Date.now()) {
            job.status = 'done';
            job.save();
        }
    });
    next();
});

const JobAnnouncement = mongoose.model("JobAnnouncement", JobAnnouncementSchema);
export default JobAnnouncement;
