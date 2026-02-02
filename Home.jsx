import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>Stream smarter. Learn faster. Watch anywhere.</h1>

        <p>
          High-quality video streaming with secure access,
          smooth playback, and a modern viewing experience.
        </p>

        <button onClick={() => navigate("/register")}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Home;
