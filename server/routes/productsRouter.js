const express = require("express");
const router = express.Router();
const {
  getAllProductsController,
} = require("../controllers/productController");

router.get("/", getAllProductsController);

module.exports = router;
