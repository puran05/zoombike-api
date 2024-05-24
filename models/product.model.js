const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    modelname: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    year: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Zoom ", ProductSchema);

module.exports = Product;
