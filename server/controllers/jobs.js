import JobAnnouncement from '../models/Jobs.js';

// Create a new job announcement
export const createJobAnnouncement = async (req, res) => {
    try {
        const {
            title,
            numberOfPositions,
            responsibleTo,
            termsOfEmployment,
            purposeOfJob,
            minimumQualifications,
            additionalRequirements,
            immediateContact,
            deadline
        } = req.body;

        const newJobAnnouncement = new JobAnnouncement({
            title,
            numberOfPositions,
            responsibleTo,
            termsOfEmployment,
            purposeOfJob,
            minimumQualifications,
            additionalRequirements,
            immediateContact,
            deadline
        });

        const savedJobAnnouncement = await newJobAnnouncement.save();
        res.status(201).json(savedJobAnnouncement);
    } catch (error) {
        console.error("Error creating job announcement:", error);
        res.status(409).json({ message: error.message });
    }
};

// Get all job announcements (both open and done)
export const getAllJobAnnouncements = async (req, res) => {
    try {
        const allJobAnnouncements = await JobAnnouncement.find();
        res.status(200).json(allJobAnnouncements);
    } catch (error) {
        console.error("Error getting job announcements:", error);
        res.status(500).json({ message: error.message });
    }
};

// Get only open job announcements
export const getOpenJobAnnouncements = async (req, res) => {
    try {
        const openJobAnnouncements = await JobAnnouncement.find({ status: 'open' });
        res.status(200).json(openJobAnnouncements);
    } catch (error) {
        console.error("Error getting open job announcements:", error);
        res.status(500).json({ message: error.message });
    }
};

// Get a job announcement by ID
export const getJobAnnouncementById = async (req, res) => {
    try {
        const jobAnnouncement = await JobAnnouncement.findById(req.params.id);
        if (!jobAnnouncement) {
            res.status(404).json({ message: "Job announcement not found" });
            return;
        }
        res.status(200).json(jobAnnouncement);
    } catch (error) {
        console.error("Error getting job announcement by ID:", error);
        res.status(500).json({ message: error.message });
    }
};

// Update a job announcement by ID
export const updateJobAnnouncementById = async (req, res) => {
    try {
        let jobAnnouncement = await JobAnnouncement.findById(req.params.id);

        if (!jobAnnouncement) {
            return res.status(404).json({ message: "Job announcement not found" });
        }

        const data = {
            title: req.body.title || jobAnnouncement.title,
            numberOfPositions: req.body.numberOfPositions || jobAnnouncement.numberOfPositions,
            responsibleTo: req.body.responsibleTo || jobAnnouncement.responsibleTo,
            termsOfEmployment: req.body.termsOfEmployment || jobAnnouncement.termsOfEmployment,
            purposeOfJob: req.body.purposeOfJob || jobAnnouncement.purposeOfJob,
            minimumQualifications: req.body.minimumQualifications || jobAnnouncement.minimumQualifications,
            additionalRequirements: req.body.additionalRequirements || jobAnnouncement.additionalRequirements,
            immediateContact: req.body.immediateContact || jobAnnouncement.immediateContact,
            deadline: req.body.deadline || jobAnnouncement.deadline,
            status: req.body.status || jobAnnouncement.status
        };

        const updatedJobAnnouncement = await JobAnnouncement.findByIdAndUpdate(req.params.id, data, { new: true });

        res.status(200).json(updatedJobAnnouncement);
    } catch (error) {
        console.error("Error updating job announcement by ID:", error);
        res.status(500).json({ message: error.message });
    }
};
// Delete a job announcement by ID
export const deleteJobAnnouncementById = async (req, res) => {
    try {
        const deletedJobAnnouncement = await JobAnnouncement.findByIdAndDelete(req.params.id);
        if (!deletedJobAnnouncement) {
            return res.status(404).json({ message: "Job announcement not found" });
        }
        res.status(200).json(deletedJobAnnouncement);
    } catch (error) {
        console.error("Error deleting job announcement by ID:", error);
        res.status(500).json({ message: error.message });
    }
};