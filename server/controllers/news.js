import News from "../models/News.js";
import { cloudinaryController } from './cloudinary.js';

export const createNews = async (req, res) => {
  try {
    const { title, category, content, date } = req.body;
    let photo = '';

    if (req.file) {
      await cloudinaryController.uploadImage(req, res, async () => {
        photo = req.picturePath;
      });
    }

    const newNews = new News({ title, category, content, photo, date });
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllNews = async (req, res) => {
  try {
    const allNews = await News.find();
    res.status(200).json(allNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({ message: "News not found" });
      return;
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNewsById = async (req, res) => {
  try {
    const { title, category, content, date } = req.body;
    let photo = ''; // Initialize photo variable

    // Check if there is a file attached
    if (req.file) {
      // If file is present, upload it to Cloudinary
      await cloudinaryController.uploadImage(req, res, async () => {
        // If upload is successful, get the image URL
        photo = req.picturePath;
      });
    }

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      { title, category, content, photo, date },
      { new: true }
    );
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteNewsById = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
