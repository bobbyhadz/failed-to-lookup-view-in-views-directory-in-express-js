// Error: Failed to lookup view "X" in views directory

// 👇️ using ES6 import/export syntax
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  '/static',
  express.static(path.join(__dirname, 'public')),
);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'bobbyhadz.com',
    message: 'Express.js example',
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
