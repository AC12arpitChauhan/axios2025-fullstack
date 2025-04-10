import { Navigate } from "react-router-dom";

export default function Profile({ user }) {
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="profile">
      <h2>Hi, {user.name} 👋</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
