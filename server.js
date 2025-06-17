import http from 'http';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Resolve __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Absolute path to the large JavaScript file we want to serve
const scriptPath = join(__dirname, '30_03copy.js');

const server = http.createServer((req, res) => {
  // Only handle GET requests to /30_03
  if (req.method === 'GET' && req.url === '/30_03') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    // Stream the file to the client to avoid loading entire file in memory
    createReadStream(scriptPath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}/30_03`);
});
