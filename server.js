import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 403;
    // res.write("<h1>Hello,World!</h1>");
    
    //writeHead 
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: "Server Error"}))
})

server.listen(PORT, () => {
    console.log(`Server running at post ${PORT}`);
})