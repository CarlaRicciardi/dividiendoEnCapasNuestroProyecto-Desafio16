const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});


mongoose.model('products', productoSchema);
module.exports = productoSchema;
