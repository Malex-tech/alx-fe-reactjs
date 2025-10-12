import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>👤 Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet /> {/* 👈 Nested routes render here */}
    </div>
  );
}
