import axios from 'axios';
const BACKEND_BASE_URL = 'http://localhost:5000';

// api call to backend to add a new color

export async function addNewColorAPI(newColor) {
  const response = await axios({
    method: 'post',
    url: `${BACKEND_BASE_URL}/colors`,
    data: JSON.stringify({
      color: `${newColor}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}
