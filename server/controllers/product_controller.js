const Product = require("../models/Product");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require('../middlewares/catchAsyncError');
// Create document in Product collection
module.exports.createProduct = catchAsyncError(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created",
    product,
  });
});

// Update document in Product collection
module.exports.updateProduct = catchAsyncError(async (req, res) => {
  //  Fetch Product by id
  let product = await Product.findById(req.params.id);

  if (!product) {
    console.log("Product not found.");
    res.status(201).json({
      success: false,
      message: "Product not found.",
    });
  } else {
    product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Product is updated.",
      product,
    });
  }
});

module.exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
      console.log("Product not found.");
      return next(new ErrorHandler("Product not found.",200));
    } else {
      product = await Product.findByIdAndRemove(req.params.id);
      res.status(201).json({
        success: true,
        message: "Product is deleted.",
        product,
      });
    }
});

module.exports.getProduct = catchAsyncError(async (req,res,next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found.',404));
      } else {
       
        res.status(201).json({
          success: true,
          message: "Product Found.",
          product,
        });
      }
});

module.exports.allProducts = catchAsyncError(async (req, res) => {
  const pro = await Product.find();

  res.status(201).json({
    success: true,
    message: "All products are here.",
    pro,
  });
});
