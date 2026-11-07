import axios from 'axios';

const API_KEY = '58335444-d34e9612c6e0b2a379739d3c4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true, // Змінено з 'true' на булеве значення true
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}