import http from 'http';
const PORT = 8000;

const server = http.createServer((req,res) => {
    // res.write("Hello World!");
    // res.setHeader('Content-type', "text/html");
    // res.setHeader('Content-type', "text/plain");
    // res.statusCode = 404;
    res.writeHead(500, {"Content-type": 'application/json'})
    res.end(JSON.stringify({message: "Server error"}));
});

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});