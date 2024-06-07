import Event from '../models/Events.js';

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const coverPhotoUrl = req.picturePath;

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      coverPhotoUrl,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(409).json({ message: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.status(200).json(allEvents);
  } catch (error) {
    console.error("Error getting events:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error getting event by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateEventById = async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const data = {
      title: req.body.title || event.title,
      description: req.body.description || event.description,
      date: req.body.date || event.date,
      location: req.body.location || event.location,
      coverPhotoUrl: req.files['coverPhoto'] ? req.files['coverPhoto'][0].url : event.coverPhotoUrl,
    };

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, data, { new: true });

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error updating event by ID:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteEventById = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEvent);
  } catch (error) {
    console.error("Error deleting event by ID:", error);
    res.status(500).json({ message: error.message });
  }
};
