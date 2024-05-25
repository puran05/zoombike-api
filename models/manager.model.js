const mongoose = require("mongoose");

const ManagerSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    address: {
      type: String,
      required: true,
      default: "Somewhere under the rainbow",
    },
    phone: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
