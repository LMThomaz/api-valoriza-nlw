import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('Hello World!');
});

app.post('/test-post', (req, res) => {
  return res.send('Hello World! Method POST');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
