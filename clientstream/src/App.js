import React, { useEffect } from "react";
import flvjs from "flv.js";

const App = () => {
  useEffect(() => {
    if (flvjs.isSupported()) {
      const videoElement = document.getElementById("videoElement");
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: "http://localhost:8003/live/moviestream.flv",
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }, []);

  return (
    <>
      <div className="video-streamer">
        <h1>Video Streamer</h1>
        <div className="video-container">
          <video id="videoElement" controls width="640" height="360"></video>
        </div>
      </div>
    </>
  );
};

export default App;
