import News from "../models/News.js";

export const createNews = async (req, res) => {
  try {
    const { 
      title, 
      category, 
      content, 
      date 
    } = req.body;
    const photo = req.picturePath; 


    const newNews = new News({ 
      title, 
      category, 
      content, 
      photo, 
      date 
    });
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
    let news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "Slide not found" });
    }

    const data = {
      title: req.body.title || news.title, 
      category: req.body.category || news.category, 
      content: req.body.content || news.content, 
      photo: req.picturePath || news.photo, 
      date: req.body.date || news.date 
    };

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      data,
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
