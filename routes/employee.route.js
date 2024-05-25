const express = require("express");
const Employee = require("../models/employee.model.js");
const router = express.Router();

const {
  getEmployees,
  getEmployee,
  createEmployees,
  updatedEmployee,
  deleteEmployee,
} = require("../controllers/employee.controllers.js");

router.get("/", getEmployees);

router.get("/:id", getEmployee);

router.post("/", createEmployees);

router.put("/:id", updatedEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
