import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Live Streaming</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* Only show Watch if logged in */}
        {isLoggedIn && <Link to="/watch">Watch</Link>}

        {/* Show Login/Register only if NOT logged in */}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/register">Register</Link>}

        {/* Show Logout only if logged in */}
        {isLoggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
