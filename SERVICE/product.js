const modelProduct = require('../MODELS/product.js');

async function getAllProductsService() {
  try {
    const getAllProducts = await modelProduct.find({});
    return getAllProducts;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProductsService };
