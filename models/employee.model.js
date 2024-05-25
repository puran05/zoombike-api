const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
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

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
