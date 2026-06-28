import axios from "axios";

const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  try {
    const res = await axios.get("https://api.pexels.com/v1/search", {
      params: { query, page, per_page },
      headers: { Authorization: PEXELS_KEY },
    });

    return res.data;
  } catch (error) {
    console.log("Error.: ", error);
  }
};

export const fetchVideos = async (query, page = 1, per_page = 20) => {
  try {
    const res = await axios.get("https://api.pexels.com/videos/search", {
      params: { query, page, per_page },
      headers: { Authorization: PEXELS_KEY },
    });

    return res.data;
  } catch (error) {
    console.log("Error.: ", error);
  }
};
