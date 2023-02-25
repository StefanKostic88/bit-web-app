const users = require("./files/data.js");
const http = require("http");
const hostname = "127.0.0.1";
const port = 5050;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(JSON.stringify(users));
    return;
  }
  if (req.url === "/posts") {
    res.statusCode = 200;
    res.end(JSON.stringify({ posts: "posts data" }));
    return;
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ message: "Something went wrong" }));
});

server.listen(port, hostname, () => {
  console.log(`http://${"127.0.0.1"}:${port}`);
});
