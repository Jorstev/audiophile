const { getAllProducts } = require("../models/productModel.js");

const getAllProductsController = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).send("Error retrieving products from the database");
  }
};

module.exports = {
  getAllProductsController,
};
