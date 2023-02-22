const express = require("express");
const router = express.Router();
const product_controller = require("../controllers/product_controller");

router.route('/new').post(product_controller.createProduct);
router.route('/all').get(product_controller.allProducts);
router
  .route("/:id")
  .get(product_controller.getProduct)
  .put(product_controller.updateProduct)
  .delete(product_controller.deleteProduct);
  

module.exports = router;
