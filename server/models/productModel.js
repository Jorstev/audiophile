const { connectDB } = require("../config/database");

async function getAllProducts() {
  const clientDB = await connectDB();

  const data = clientDB.db("db_audiophile").collection("products").find();
  const products = await data.toArray(); // Use toArray() to get the actual data
  console.log("ProductModel" + products);

  return products;
}

module.exports = {
  getAllProducts,
};
