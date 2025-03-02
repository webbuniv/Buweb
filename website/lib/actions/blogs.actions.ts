import axios from 'axios';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getBlogs = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts/published`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}