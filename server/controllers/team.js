import Team from '../models/Team.js';
import { cloudinaryController } from './cloudinary.js';
export const createTeamMember = async (req, res) => {
  try {
    const { 
      name, 
      position, 
      social_twitter, 
      social_facebook, 
      social_instagram, 
      social_linkedin, 
      bio, 
      quote 
    } = req.body;
    const image_url = req.picturePath;

    const newTeamMember = new Team({
      name,
      position,
      image_url,
      social_twitter,
      social_facebook,
      social_instagram,
      social_linkedin,
      bio,
      quote
    });

    const savedTeamMember = await newTeamMember.save();
    res.status(201).json(savedTeamMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllTeamMembers = async (req, res) => {
  try {
    const allTeamMembers = await Team.find();
    res.status(200).json(allTeamMembers);
  } catch (error) {
    console.error("Error getting team members:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) {
      res.status(404).json({ message: "Team member not found" });
      return;
    }
    res.status(200).json(teamMember);
  } catch (error) {
    console.error("Error getting team member by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateTeamMemberById = async (req, res) => {
    try {
      const { name, position, social_twitter, social_facebook, social_instagram, social_linkedin, bio, quote } = req.body;
  
      let updatedFields = {
        name,
        position,
        social_twitter,
        social_facebook,
        social_instagram,
        social_linkedin,
        bio,
        quote
      };
  
      // Check if there is a file attached for image
      if (req.file) {
        // If file is present, upload it to Cloudinary
        await cloudinaryController.uploadImage(req, res, async () => {
          // If upload is successful, get the image URL and add it to updatedFields
          updatedFields.image_url = req.picturePath;
        });
      }
  
      const updatedTeamMember = await Team.findByIdAndUpdate(
        req.params.id,
        updatedFields,
        { new: true }
      );
      res.status(200).json(updatedTeamMember);
    } catch (error) {
      console.error("Error updating team member by ID:", error);
      res.status(500).json({ message: error.message });
    }
  };
  

export const deleteTeamMemberById = async (req, res) => {
  try {
    const deletedTeamMember = await Team.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTeamMember);
  } catch (error) {
    console.error("Error deleting team member by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
