import Team from '../models/Team.js';
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
      let teams = await Team.findById(req.params.id);

      if (!teams) {
        return res.status(404).json({ message: "Team member not found" });
      }
      const data = {
        image_url: req.picturePath || teams.image_url,
        name: req.body.name || teams.name,
        position: req.body.position || teams.position,
        social_twitter: req.body.social_twitter || teams.social_twitter,
        social_facebook: req.body.social_facebook || teams.social_facebook,
        social_instagram: req.body.social_instagram || teams.social_instagram,
        social_linkedin: req.body.social_linkedin || teams.social_linkedin,
        bio: req.body.bio || teams.bio,
        quote: req.body.quote || teams.quote,
      }
  
      const updatedTeamMember = await Team.findByIdAndUpdate(
        req.params.id,
        data,
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
