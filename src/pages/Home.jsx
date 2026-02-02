import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* HERO SECTION with Background Image */}
      <section className="hero hero-bg">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Watch. Stream. <span>Go Live.</span>
            </h1>
            <p>
              A modern live streaming platform to watch, stream, and connect
              with creators in real time.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/register")}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="hero-right">
            {/* Animated Live Preview Card */}
            <div className="preview-card">
              <div className="live-badge">
                <span className="live-dot"></span>
                LIVE
              </div>

              <div className="preview-content">
                <h3>Live Streaming Preview</h3>
                <p>Streaming in real-time...</p>

                <div className="loading-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
