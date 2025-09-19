// src/services/githubService.js
import axios from "axios";

export async function fetchAdvancedUserSearch(username, location, minRepos) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`https://api.github.com/search/users?q=${query.trim()}`);

    if (response.data.items.length === 0) {
      throw new Error("No users match your search criteria.");
    }

    return response.data.items;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error("Rate limit exceeded. Try again later.");
    }
    throw new Error("Something went wrong while fetching data.");
  }
}
