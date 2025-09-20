// src/services/githubService.js
import axios from "axios";

export async function fetchAdvancedUserSearch(username, location, minRepos) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query.trim()}`
    );

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

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data.");
  }
}

export const fetchUserRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) throw new Error("Failed to fetch repos");
  return await response.json();
};
