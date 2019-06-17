import axios from 'axios';

const BACKEND_BASE_URL = 'http://localhost:5000';

// api call to backend to fetch all colors
export async function getAllColorsAPI() {
  const response = await axios.get(
    `${BACKEND_BASE_URL}/colors`,
  );
  return response.data;
}

// api call to backend to add a new color
// export function addNewColorAPI() {
// }