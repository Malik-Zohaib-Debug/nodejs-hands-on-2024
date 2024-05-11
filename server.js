import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write("<h1>Hello,World!</h1>");
    res.end();
})

server.listen(8000, () => {
    console.log("Server running at post 8000");
})