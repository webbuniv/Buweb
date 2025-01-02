import { ID, Client, Databases, Storage } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import { appwriteConfig } from "../libs/appwrite/config.js";

const createAdminClient = async () => {
    try {
        const client = new Client()
            .setEndpoint(appwriteConfig.endpointUrl)
            .setProject(appwriteConfig.projectId)
            .setKey(appwriteConfig.secretKey);

        const database = new Databases(client);
        const storage = new Storage(client);

        return { database, storage };
    } catch (error) {
        console.error("Error initializing Appwrite client:", error);
        throw new Error("Failed to initialize Appwrite client.");
    }
};

const uploadPhoto = async (file) => {
    try {
        const { storage } = await createAdminClient();
        const inputFile = InputFile.fromBuffer(file, file.name);
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

export const createNews = async (req, res) => {
    try {
        const { database } = await createAdminClient();

        const { title, category, content, date, author, tags, summary } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required." });
        }

        const photoUrl =  await uploadPhoto(req.file);

        const formattedTags = Array.isArray(tags) ? tags : [];

        const newNews = {
            title,
            category,
            content,
            photo: photoUrl,
            date,
            author,
            tags: formattedTags,
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
        res.status(500).json({ message: error.message });
    }
};

export const getAllNews = async (req, res) => {
    try {
        const { database } = await createAdminClient();

        const allNews = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.newsCollectionId
        );

        res.status(200).json(allNews.documents);
    } catch (error) {
        console.error("Error getting all news:", error);
        res.status(500).json({ message: error.message });
    }
};

export const getNewsById = async (req, res) => {
    try {
        const { database } = await createAdminClient();

        const news = await database.getDocument(
            appwriteConfig.databaseId,
            appwriteConfig.newsCollectionId,
            req.params.id
        );

        if (!news) {
            return res.status(404).json({ message: "News not found." });
        }

        res.status(200).json(news);
    } catch (error) {
        console.error("Error getting news by ID:", error);
        res.status(500).json({ message: error.message });
    }
};

export const updateNewsById = async (req, res) => {
    try {
        const { database } = await createAdminClient();

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

        const updatedNews = await database.updateDocument(
            appwriteConfig.databaseId,
            appwriteConfig.newsCollectionId,
            req.params.id,
            data
        );

        res.status(200).json(updatedNews);
    } catch (error) {
        console.error("Error updating news by ID:", error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteNewsById = async (req, res) => {
    try {
        const { database } = await createAdminClient();

        await database.deleteDocument(
            appwriteConfig.databaseId,
            appwriteConfig.newsCollectionId,
            req.params.id
        );

        res.status(200).json({ message: "News deleted successfully." });
    } catch (error) {
        console.error("Error deleting news by ID:", error);
        res.status(500).json({ message: error.message });
    }
};
