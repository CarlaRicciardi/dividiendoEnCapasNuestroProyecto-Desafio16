const { getAllProductsService, getProductByIdService, postProductService, putProductService, deleteProductByIdService } = require('../SERVICE/product.js');

async function getAllProductsController(req, res) {
  try {
    const getAllProducts = await getAllProductsService();
    console.log(getAllProducts);

    res.json(getAllProducts);
  } catch (error) {
    console.log(error);
  }
}

async function getProductByIdController(req, res) {
  const productId = req.params;
  await getProductByIdService(productId);

  res.json(productId);
}

async function postProductController(req, res) {
  const dataProduct = req.body;
  await postProductService(dataProduct);

  res.json(dataProduct);
}

async function putProductController(req, res) {
  const id = req.params;
  const dataProduct = req.body;
  await putProductService(id, title, price, thumbnail);

  res.json(id, dataProduct);
}


async function deleteProductByIdController(req, res) {
    const id = req.params;
    console.log(id);
    await deleteProductByIdService(id);
  
    res.json('producto eliminado.');
  }

module.exports = { getAllProductsController, getProductByIdController, postProductController, putProductController, deleteProductByIdController };
