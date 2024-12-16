const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

const getSingleProduct = async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(err){
    res.status(500).json({ error: err.message }); 
  }
};

const updateProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);

    if(!product){
      res.status(404).json({ error: 'Product not found' });
    }

    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json(updatedProduct);

  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
      const product = await Product.findByIdAndDelete(req.params.id);
  
      if(!product){
        res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted' });
  
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};