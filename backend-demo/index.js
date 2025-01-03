const express = require('express');

// User routes
const userRoutes = require('./routes/user');
const app = express();
const port = 3000;

// When to use Middleware
// 1. Authentication
// 2. Logging
// 3. Validation

// Application level middleware
app.use((req, res, next) => {
  console.log('App level middleware');
  next()
})

// Grouped the routes related to /user
app.use('/user', userRoutes);

app.get('/',
  (req, res) => {
    console.log('get middleware');
    res.send('Hello Get!');
  });

app.post('/satyam',
  (req, res) => {
    console.log('res', res)
    console.log('get middleware');
    res.send('Hello Post!');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});