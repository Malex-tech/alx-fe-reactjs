import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Welcome Home</h1>
      <p>Navigate the app:</p>
      <ul>
        <li><Link to="/profile">Go to Profile</Link></li>
        <li><Link to="/blog/42">View Blog Post #42</Link></li>
      </ul>
    </div>
  );
}
