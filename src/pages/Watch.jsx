import "../styles/Watch.css";

function Watch() {
  return (
    <div className="watch">
      <h2>Now Playing</h2>

      <video controls width="720">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support video.
      </video>

      <button className="download-btn">Download</button>
    </div>
  );
}

export default Watch;
