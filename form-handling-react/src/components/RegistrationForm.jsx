import { useState } from "react";

const RegistrationForm = () => {
  // define individual states for controlled inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    const userData = { username, email, password };

    // mock API request
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log("User registered:", data);
      alert("User registered successfully!");

      // reset fields
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Controlled Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            className="w-full border p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
