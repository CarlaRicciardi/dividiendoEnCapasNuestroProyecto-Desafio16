const contenedorMongoDB = require('../../contenedores/ContenedorMongoDB.js');
const modelCart = require('../../MODELS/modelCarritos.js.js.js.js.js');

class CarritosDaoMongoDB extends contenedorMongoDB {
  constructor() {
    super({
      name: 'carts', //name collection
      schema: modelCart.CartsSchema,
    });
  }
}

module.exports = CarritosDaoMongoDB;
