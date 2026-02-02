import "../styles/Login.css";

function AdminLogin() {
  return (
    <div className="login">
      <h2>Admin Login</h2>
      <input placeholder="Admin ID" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default AdminLogin;
