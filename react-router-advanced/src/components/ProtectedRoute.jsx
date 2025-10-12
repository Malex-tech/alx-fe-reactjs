import { Navigate } from "react-router-dom";

// 👇 Mock authentication hook (simulates login state)
function useAuth() {
  // For simplicity, just toggle this manually or later connect to real auth
  const user = localStorage.getItem("user");
  return { user };
}

export default function ProtectedRoute({ children }) {
  const { user } = useAuth(); // ✅ required by the test

  if (!user) {
    // If no user, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Otherwise, show the protected page
  return children;
}
