const modelProduct = require('../MODELS/product.js');

function validationId(array, id) {
  const index = array.findIndex((object) => object.id == id);
  if (array[index]) {
    return true;
  } else {
    return false;
  }
}

async function getAllProductsService() {
  try {
    const getAllProducts = await modelProduct.find({});
    return getAllProducts;
  } catch (error) {
    console.log(error);
  }
}

async function getProductByIdService(id) {
  const getAllProducts = await modelProduct.find({});
  const validation = validationId(getAllProducts, id);
  if (validation) {
    let productById = await modelProduct.find({ _id: id });
    productById = productById[0];
    //ME DEVUELVE EL ID SOLAMENTE, COMO DEBERIA HACER PARA QUE ME DEVUELVA TODO LO QUE TIENE???
    return productById;
  } else {
    return 'no existe el numero de id elegido';
  }
}

async function postProductService(title, price, thumbnail) {
  try {
    const newProduct = new modelProduct({
      title: title,
      price: price,
      thumbnail: thumbnail,
    });
    const productPosted = await newProduct.postProductService();
    const aux = await modelProduct.find({ title: title });
    const productId = aux[0]._id;
    return productId;
  } catch (error) {
    console.log('error al postear producto!');
    return 'se ha producido un error al postear un producto nuevo';
  }
}

async function putProductService(id, title, price, thumbnail) {
  const getAllProducts = await modelProduct.find({});
  const validation = validationId(getAllProducts, id);
  if (validation) {
    await modelProduct.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title: title,
          price: price,
          thumbnail: thumbnail,
        },
      },
    );
    const aux = await modelProduct.find({ _id: id });
    return `Se actualizo el producto ${aux[0].title}`;
  } else {
    return 'no existe el numero de id elegido';
  }
}

async function deleteProductByIdService(id) {
  const getAllProducts = await modelProduct.find({});
  const validation = validationId(getAllProducts, id);
  if (validation) {
    //no entra aca...❌❌❌❌
    await modelProduct.deleteOne({ _id: id });
    return `Se elimino con exito: ${id}`;
  } else {
    return 'no existe el numero de id elegido';
  }
}

module.exports = { getAllProductsService, getProductByIdService, postProductService, putProductService, deleteProductByIdService };
