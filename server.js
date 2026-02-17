const http = require("http");
const https = require("https");

const PORT = process.env.PORT || 10000;

http.createServer((req, res) => {
  if (req.url === "/playlist.php" || req.url === "/playlist") {
    
    const playlist = `#EXTM3U
#EXTINF:-1 tvg-name="Test Channel",Test Channel
https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
`;

    res.writeHead(200, {
      "Content-Type": "application/x-mpegURL"
    });
    res.end(playlist);

  } else {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Tataplay proxy running");
  }
}).listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
