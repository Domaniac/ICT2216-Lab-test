import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Project ready for testing.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});