import React from "react";
import ReactPlayer from "react-player";

const App = () => {
  return (
    <div className="video-container">
      <h1>Video Streaming from OBS</h1>
      <ReactPlayer
        url="http://localhost:8003/live/moviestream.flv"
        width={620}
        height={340}
        controls={true}
        playing={true}
        muted={true} // Muting the video for autoplay
      />
    </div>
  );
};

export default App;
