const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  author: String,
  genre: String,
  rentable: Boolean,
  exchangable: Boolean,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("novels", schema);

module.exports = model;
