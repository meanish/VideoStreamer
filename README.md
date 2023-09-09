# VideoStreamer



## About This Project
Simple use of node-media-server to stream a video online.
Absolutely any feedback on the project is welcomed. 


## How To Run The Program:

//Run the nodejs server

1. Download the ZIP file or clone the repository.
2. Install the node package by running the "npm install" command.
3. Run the nodejs server(nodemon ./app.js) 
4. The node-media Rtmp server will get started on port 1936 whereas Http on 8003.

//Stream the video

1. Run OBS studio and add a media source from your pc that you want to stream.

2. Go to settings and stream the service to custom.
3. Add server link as rtmp://localhost:1936/live/ and use moviestream as the stream key.
4. Apply the changes to start streaming.

//Display the video streaming in the webpage

5. Open vscode terminal and switch dir to clientstream. Install node package (npm install) and run npm start. 

6. (http://localhost:3000/) on your browser(may differ according to your configs) will get started on the browser where the streaming video is being displayed.


