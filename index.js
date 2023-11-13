const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let products = [
  {
    id: 1,
    name: "Finanzas desde cero",
    price: 5499,
    image: "images/product-1.jpg",
    stock: 1,
  },
  {
    id: 2,
    name: "Analisis Técnico",
    price: 5499,
    image: "images/product-2.jpg",
    stock: 1,
  },
  
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const procutsCopy = products.map((p) => ({ ...p }));
  ids.forEach((id) => {
    const product = procutsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = procutsCopy;
  res.send(products);
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});