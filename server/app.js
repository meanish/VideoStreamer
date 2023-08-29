const express = require("express");
const NodeMediaServer = require("node-media-server");
const PORT = 8001;
const app = express();

const config2 = {
  rtmp: {
    port: 1936,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8003,
    allow_origin: "*",
  },
};

var nms2 = new NodeMediaServer(config2);

nms2.run();

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
