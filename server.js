const http = require("http");
const https = require("https");

const PORT = process.env.PORT || 10000;

const PLAYLIST_URL = "https://la.drmlive.net/tp/playlist.php";

http.createServer((req, res) => {

  if (req.url === "/playlist.php" || req.url === "/playlist") {

    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
        "Connection": "keep-alive"
      }
    };

    https.get(PLAYLIST_URL, options, (response) => {

      let data = "";

      response.on("data", chunk => {
        data += chunk;
      });

      response.on("end", () => {

        res.writeHead(200, {
          "Content-Type": "application/x-mpegURL",
          "Access-Control-Allow-Origin": "*"
        });

        res.end(data);

      });

    }).on("error", (err) => {

      res.writeHead(500);
      res.end("Error loading playlist: " + err.message);

    });

  } else {

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Tataplay Render Proxy Running");

  }

}).listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
