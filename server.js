import http from "http";
import dotenv from "dotenv";
dotenv.config();
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
  // res.write("Hello World!");
  // res.setHeader('Content-type', "text/html");
  // res.setHeader('Content-type', "text/plain");
  // res.statusCode = 404;
  // console.log(req.url);
  // console.log(req.method);

  try {
    // check if GET request
    if (req.method === "GET") {
        let filePath;
      if (req.url === "/") {
        // res.writeHead(200, { "Content-type": "text/html" });
        // res.end("<h1>Homepage/h1>");
        filePath = path.join(__dirname,"public", "index.html")
      } else if (req.url === "/about") {
        // res.writeHead(200, { "Content-type": "text/html" });
        // res.end("<h1>Aboutpage/h1>");
        filePath = path.join(__dirname,"public", "about.html")
      } else {
        // res.writeHead(404, { "Content-type": "text/html" });
        // res.end("<h1>not found/h1>");
        throw new Error('Not found');
      }

      const data = await fs.readFile(filePath);
      res.setHeader('Content-type', "text/html");
      res.write(data);
      res.end()
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
