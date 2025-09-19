import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function fetchUserData(username) {
  const headers = {};

  // Optional: Use API key if available
  if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
  }

  console.log("Fetching:", `${BASE_URL}/${username}`); // 👈 DEBUG
  const response = await axios.get(`${BASE_URL}/${username}`, { headers });
  console.log("Response data:", response.data); // 👈 DEBUG
  return response.data;
  
}
