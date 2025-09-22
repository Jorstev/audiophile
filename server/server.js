const express = require("express");
const app = express();
const router = require("./routes/productsRouter");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(morgan("tiny"));
app.use("/api/products", router);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "..", "client", "dist");

  // Serve static files from client/dist
  app.use(express.static(buildPath));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
