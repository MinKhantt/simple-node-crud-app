const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const productRoute = require('./routes/productRoute');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// connect to MongoDB
mongoose.connect("mongodb+srv://minkhant:minkhant007@backenddb.iqfvr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}).catch((err) => {
  console.log(err);
});