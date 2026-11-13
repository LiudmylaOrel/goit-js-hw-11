import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KAY = '58561666-a1b8648f8ae60e419cc6af7ad';

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KAY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};
