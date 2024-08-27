import { createServer } from 'http';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const users = [
    { id: 1, name: "Mickey Mouse" },
    { id: 2, name: "Donald Duck" },
    { id: 3, name: "Goofy" },
];

const server = createServer((req,res)=>{
    if(req.url==='/api/users' && req.method==="GET"){
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==="GET"){
        const id = req.url.split('/')[3];
        const user = users.find((user)=>user.id===parseInt(id));
        if(user){
            res.setHeader('Content-type', 'application/json');
            res.write(JSON.stringify(user));
            res.end();  
        }else{
            res.setHeader('Content-type', 'application/json');
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'user not found'}));
            res.end(); 
        }
    }else{
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'route not found'}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});