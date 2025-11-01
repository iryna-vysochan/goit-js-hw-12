import axios from "axios";

export default async function getImagesByQuery(q, page) {
  
  const params = new URLSearchParams({
    key: '53047791-da6bf0178b39a3cb2727ecc21',
    q,
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });
  
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  
  return response.data;

}
