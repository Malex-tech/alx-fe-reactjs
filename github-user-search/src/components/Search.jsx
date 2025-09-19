import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      console.error("API Error:", err);
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 rounded-xl shadow-lg bg-white">
      {/* Advanced Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum public repos"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}