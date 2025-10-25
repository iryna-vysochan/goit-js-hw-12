import axios from "axios";

export default async function getImagesByQuery(q, page) {
  
  const params = new URLSearchParams({
    key: '52124620-04c3728bcdfdd891621e81587',
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