import React, { useState } from "react";
import { fetchUserData, fetchUserRepos } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = username.trim();
    if (!q) return;

    setLoading(true);
    setError("");
    setUserData(null);
    setRepos([]);

    try {
      const data = await fetchUserData(q);
      setUserData(data);

      // Fetch repos if user is found
      const repoData = await fetchUserRepos(q);
      setRepos(repoData);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-wrapper">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && (
        <div className="mt-6 p-4 bg-white shadow rounded-lg text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="96"
            height="96"
            className="mx-auto rounded-full"
          />
          <h3 className="mt-2 text-xl font-semibold">
            {userData.name || userData.login}
          </h3>

          {/* ✅ Show location if available */}
          {userData.location && (
            <p className="text-gray-600 text-sm mt-1">{userData.location}</p>
          )}
          
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>

          {/* Repos section */}
          {repos.length > 0 && (
            <ul className="mt-4 space-y-2 text-left">
              <h4 className="text-lg font-bold mb-2">Public Repositories</h4>
              {repos.map((repo) => (
                <li key={repo.id} className="border-b pb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
