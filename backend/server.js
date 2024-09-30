const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/users', userRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
  });
}
