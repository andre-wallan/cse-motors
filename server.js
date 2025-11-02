// server.js (ES module version)
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const port = 5500;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
