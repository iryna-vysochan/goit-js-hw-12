import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "53047791-da6bf0178b39a3cb2727ecc21";
const IMAGES_PER_PAGE = 15;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  },
});

export default async function getImagesByQuery(q, page = 1) {
  try {
    const response = await api.get("", {
      params: {
        q,
        page,
        per_page: IMAGES_PER_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    return { totalHits: 0, hits: [] };
  }

}
