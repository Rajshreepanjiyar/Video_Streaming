import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth">
      <h2>User Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        New user?{" "}
        <span onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
