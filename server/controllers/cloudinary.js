import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (req, res, next) => {
    try {
      await cloudinary.v2.uploader.upload_stream(
        { resource_type: 'image' },
        async (error, result) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ error, message: "Image upload failed" });
          }
          const picturePath = result.secure_url;
          req.picturePath = picturePath;
  
          // Continue to the next middleware or route handler
          next();
        }
      ).end(req.file.buffer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error, message: 'Image upload failed' });
    }
};

export const cloudinaryController = {
    uploadImage,
}
