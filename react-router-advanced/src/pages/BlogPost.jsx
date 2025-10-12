import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📰 Blog Post #{postId}</h1>
      <p>This post ID was captured dynamically from the URL.</p>
    </div>
  );
}
