import Publication from '../models/Publication.js';

export const createPublication = async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      title, 
      tags, 
      description,
      publicationUrl
    } = req.body;

    const coverPhotoUrl = req.picturePath;

    const newPublication = new Publication({
      firstName,
      lastName,
      email,
      title,
      tags: tags.split(','), 
      coverPhotoUrl,
      description,
      publicationUrl,
    });

    const savedPublication = await newPublication.save();
    res.status(201).json(savedPublication);
  } catch (error) {
    console.error("Error creating publication:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllPublications = async (req, res) => {
  try {
    const allPublications = await Publication.find();
    res.status(200).json(allPublications);
  } catch (error) {
    console.error("Error getting publications:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      res.status(404).json({ message: "Publication not found" });
      return;
    }
    res.status(200).json(publication);
  } catch (error) {
    console.error("Error getting publication by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updatePublicationById = async (req, res) => {
  try {
    let publication = await Publication.findById(req.params.id);

    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    const data = {
      firstName: req.body.firstName || publication.firstName,
      lastName: req.body.lastName || publication.lastName,
      email: req.body.email || publication.email,
      title: req.body.title || publication.title,
      tags: req.body.tags ? req.body.tags.split(',') : publication.tags,
      coverPhotoUrl: req.picturePath || publication.coverPhotoUrl,
      description: req.body.description || publication.description,
      publicationUrl: req.body.publicationUrl || publication.publicationUrl,
      lastModified: Date.now(),
    };

    const updatedPublication = await Publication.findByIdAndUpdate(req.params.id, data, { new: true });

    res.status(200).json(updatedPublication);
  } catch (error) {
    console.error("Error updating publication by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deletePublicationById = async (req, res) => {
  try {
    const deletedPublication = await Publication.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPublication);
  } catch (error) {
    console.error("Error deleting publication by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
