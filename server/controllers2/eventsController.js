import { ID } from "node-appwrite";
import { createAdminClient } from "../libs/appwrite/settings.js";
import { appwriteConfig } from "../libs/appwrite/config.js";

/* UPLOAD PICTURE */
const uploadPicture = async (file) => {
  try {
    const response = await createAdminClient()
      .getStorage()
      .createFile(appwriteConfig.bucketId, ID.unique(), file);

    // Return the file URL
    return `${appwriteConfig.endpointUrl}/storage/buckets/${appwriteConfig.bucketId}/files/${response.$id}/view?project=${appwriteConfig.projectId}`;
  } catch (error) {
    console.error("Error uploading picture:", error);
    throw new Error("Failed to upload picture.");
  }
};

/* CREATE EVENT */
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, organizer, tags } = req.body;

    // Upload picture to Appwrite bucket
    const coverPhotoUrl = req.file ? await uploadPicture(req.file) : null;

    const newEvent = {
      title,
      description,
      date,
      location,
      coverPhotoUrl,
      organizer,
      tags,
    };

    const response = await createAdminClient()
      .getDatabases()
      .createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.eventsCollectionId,
        ID.unique(),
        newEvent
      );

    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(409).json({ message: error.message });
  }
};

/* UPDATE EVENT BY ID */
export const updateEventById = async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      location: req.body.location,
      organizer: req.body.organizer,
      tags: req.body.tags,
    };

    if (req.file) {
      const coverPhotoUrl = await uploadPicture(req.file);
      updatedData.coverPhotoUrl = coverPhotoUrl;
    }

    const updatedEvent = await createAdminClient()
      .getDatabases()
      .updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.eventsCollectionId,
        req.params.id,
        updatedData
      );

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error updating event by ID:", error);
    if (error.code === 404) {
      res.status(404).json({ message: "Event not found" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

/* DELETE EVENT BY ID */
export const deleteEventById = async (req, res) => {
    try {
      const { id } = req.params;

      await createAdminClient()
        .getDatabases()
        .deleteDocument(
          appwriteConfig.databaseId,
          appwriteConfig.eventsCollectionId,
          id
        );
  
      res.status(200).json({ message: "Event deleted successfully." });
    } catch (error) {
      console.error("Error deleting event by ID:", error);
      if (error.code === 404) {
        res.status(404).json({ message: "Event not found" });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  };
  

  /* GET ALL EVENTS */
export const getAllEvents = async (req, res) => {
    try {
      // Fetch all documents from the events collection
      const response = await createAdminClient()
        .getDatabases()
        .listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.eventsCollectionId
        );
  
      res.status(200).json(response.documents);
    } catch (error) {
      console.error("Error fetching all events:", error);
      res.status(500).json({ message: error.message });
    }
  };
/* GET EVENT BY ID */
export const getEventById = async (req, res) => {
    try {
      const { id } = req.params; // Get the event ID from request params
  
      // Fetch the event document by ID from Appwrite database
      const event = await createAdminClient()
        .getDatabases()
        .getDocument(appwriteConfig.databaseId, appwriteConfig.eventsCollectionId, id);
  
      if (!event) {
        res.status(404).json({ message: "Event not found" });
        return;
      }
  
      res.status(200).json(event);
    } catch (error) {
      console.error("Error fetching event by ID:", error);
      res.status(500).json({ message: error.message });
    }
  };
  