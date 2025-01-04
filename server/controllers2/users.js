import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createAdminClient } from "../libs/appwrite/settings";
import { appwriteConfig } from "../appwrite/appwriteConfig";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Prepare user data
    const newUser = {
      firstName,
      lastName,
      email,
      password: passwordHash,
    };

    // Create a new user document
    const response = await createAdminClient()
      .getDatabases()
      .createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        newUser
      );

    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const users = await createAdminClient()
      .getDatabases()
      .listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [`equal("email", "${email}")`]
      );

    if (users.total === 0) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    const user = users.documents[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.$id }, process.env.JWT_SECRET);

    // Remove password before sending user info
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({ token, user: userWithoutPassword });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
