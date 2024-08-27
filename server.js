import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req,res) => {
    // res.write("Hello World!");
    // res.setHeader('Content-type', "text/html");
    // res.setHeader('Content-type', "text/plain");
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);

    if(req.url==='/'){
        res.writeHead(200, {"Content-type": 'text/html'})
        res.end('<h1>Homepage/h1>');
    }else if(req.url==="/about"){
        res.writeHead(200, {"Content-type": 'text/html'})
        res.end('<h1>Aboutpage/h1>'); 
    }else{
        res.writeHead(404, {"Content-type": 'text/html'})
        res.end('<h1>not found/h1>');
    }
});

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});