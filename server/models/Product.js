const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        public_url: {
          type: String,
          required: true,
        },
      }
    ],
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        default : 1
    },
    numOfReviews : {
      type : Number,
      default : 0
    },
    reviwes : [
        {
            name : {
                type : String,
                required : true
            },
            rating : {
                type : Number,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model('Product',productSchema);
module.exports = User;
