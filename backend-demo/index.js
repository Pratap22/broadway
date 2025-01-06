const express = require('express'); // imports express module | require -> import

// User routes
const userRoutes = require('./routes/user');
// Import the created module
const anjaliRoutes = require('./routes/anjali'); // './routes/anjali' -> './routes/anjali/index.js'
const ayushaRoutes = require('./routes/ayusha');
const dineshRoutes = require('./routes/dinesh');
const sandeshRoutes = require('./routes/sandesh');
const satyamRoutes = require('./routes/satyam');
const app = express(); // creates an express application | express() -> app
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

// If we add middleware things to note -> Either send the response or pass it to the next middleware
app.use((req, res, next) => {
  console.log('App level second middleware');
  next()
})

// Grouped the routes related to /user
app.use('/user', userRoutes);

// /anjali/*
app.use('/anjali', anjaliRoutes);
app.use('/ayusha', ayushaRoutes);
app.use('/dinesh', dineshRoutes);
app.use('/sandesh', sandeshRoutes);
app.use('/satyam', satyamRoutes);

app.get('/',
  (req, res) => {
    console.log('get middleware');
    res.send('Hello from App');
  });

app.post('/satyam',
  (req, res) => {
    console.log('res', res)
    console.log('get middleware');
    res.send('Hello Post!');
  });

app.use((error, req, res, next) => {
  console.log('Error middleware');
  console.log(error)

  res.status(500).send('Error handled')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// CRUD todo