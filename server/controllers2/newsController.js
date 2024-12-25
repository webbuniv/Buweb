import { ID } from "node-appwrite";
import { createAdminClient } from "../libs/appwrite/settings.js";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../libs/appwrite/config.js";

/* UPLOAD PHOTO */
const uploadPhoto = async (file) => {
    const { storage } = await createAdminClient();
  try {
    const inputFile = InputFile.fromBuffer(file, file.name)
    const response = await storage.createFile(
        appwriteConfig.bucketId,
        ID.unique(), 
        inputFile
    );

    return `${appwriteConfig.endpointUrl}/storage/buckets/${appwriteConfig.bucketId}/files/${response.$id}/view?project=${appwriteConfig.projectId}`;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw new Error("Failed to upload photo.");
  }
};

/* CREATE NEWS */
export const createNews = async (req, res) => {

    const { database } = await createAdminClient()
  try {
    const { title, category, content, date, author, tags, summary } = req.body;

    // Upload photo to Appwrite bucket
    const photoUrl = req.file ? await uploadPhoto(req.file) : null;

    const newNews = {
      title,
      category,
      content,
      photo: photoUrl,
      date,
      author,
      tags,
      summary,
    };

    const response = await database.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.newsCollectionId,
        ID.unique(),
        newNews
      );

    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL NEWS */
export const getAllNews = async (req, res) => {
    const { database } = await createAdminClient();
  try {
    const allNews = database.listDocuments(
        appwriteConfig.databaseId, 
        appwriteConfig.newsCollectionId
    );

    res.status(200).json(allNews.documents);
  } catch (error) {
    console.error("Error getting news:", error);
    res.status(500).json({ message: error.message });
  }
};

/* GET NEWS BY ID */
export const getNewsById = async (req, res) => {
    const { database } = await createAdminClient();
  try {
    const news = await database.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.newsCollectionId,
        req.params.id
      );

    res.status(200).json(news);
  } catch (error) {
    console.error("Error getting news by ID:", error);
    if (error.code === 404) {
      res.status(404).json({ message: "News not found" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const updateNewsById = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      date: req.body.date,
      author: req.body.author,
      tags: req.body.tags,
      summary: req.body.summary,
    };

    if (req.file) {
      const photoUrl = await uploadPhoto(req.file);
      data.photo = photoUrl;
    }

    const updatedNews = await createAdminClient()
      .updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.newsCollectionId,
        req.params.id,
        data
      );

    res.status(200).json(updatedNews);
  } catch (error) {
    console.error("Error updating news by ID:", error);
    if (error.code === 404) {
      res.status(404).json({ message: "News not found" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

/* DELETE NEWS BY ID */
export const deleteNewsById = async (req, res) => {
  try {
    const deletedNews = await createAdminClient()
      .deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.newsCollectionId,
        req.params.id
      );

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting news by ID:", error);
    if (error.code === 404) {
      res.status(404).json({ message: "News not found" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};
