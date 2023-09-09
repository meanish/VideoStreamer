const express = require("express");
const NodeMediaServer = require("node-media-server");
const PORT = 8001;
const app = express();

const config2 = {
  rtmp: {
    port: 1936,
    chunk_size: 10000,
    gop_cache: true,
    ping: 10,
    ping_timeout: 30,
  },
  http: {
    port: 8003,
    allow_origin: "*",
  },
};

var nms2 = new NodeMediaServer(config2);

nms2.run();
false;

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
