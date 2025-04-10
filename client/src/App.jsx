import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        {user && <Link to="/profile">Profile</Link>}
      </nav>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}
