import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    if (!savedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
      setError("Invalid email or password");
      return;
    }

    // Login success
    localStorage.setItem("isLoggedIn", "true");
    setError("");

    navigate("/watch");
  };

  return (
    <div className="auth-page auth-bg">
      <div className="auth-overlay"></div>

      <div className="auth-card">
        <h2>User Login</h2>

        {error && <p className="auth-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
