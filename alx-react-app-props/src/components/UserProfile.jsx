// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  // grab the user data from context
  const user = useContext(UserContext);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
