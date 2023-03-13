const { getAllProductsService } = require('../SERVICE/product.js');

async function getAllProductsController(req, res) {
  try {
    const getAllProducts = await getAllProductsService();
    console.log(getAllProducts);

    res.json(getAllProducts);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllProductsController };
