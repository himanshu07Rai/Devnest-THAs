var express = require("express");
var router = express.Router();

const prisma = require("../prisma/client");

router.get("/create", async () => {
  const now = Date.now();
  for (let i = 0; i < 100; i++) {
    const productId = now + i;
    await prisma.product.create({
      data: {
        title: `product title ${productId}`,
        price: Math.floor(100 + Math.random() * 10000),
        count: Math.floor(1 + Math.random() * 1000),
        description: `product description ${productId}`,
        image: `https://picsum.photos/100?product=${productId}`,
      },
    });
  }
});

router.get("/", async function (req, res, next) {
  try {
    const query = req.query;
    console.log(query);
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after) || 0;
    // if()
    const products = await prisma.product.findMany({
      skip: after,
      take: count * page,
    });
    // console.log(products);
    res.send({
      count: products.length,
      items: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error,
      message: "can not process",
    });
  }
});

module.exports = router;
