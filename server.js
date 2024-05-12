import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 403;
    // res.write("<h1>Hello,World!</h1>");
    
    try {
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method Not Found');
        }
    } catch(error){

        //writeHead 
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "Server Error"}))
    }

})

server.listen(PORT, () => {
    console.log(`Server running at post ${PORT}`);
})