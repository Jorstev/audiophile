const express = require("express");
const app = express();
const router = require("./routes/productsRouter");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use("/api/products", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
