const Employee = require("../models/employee.model");

const getEmployees = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id, req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployees = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatedEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body);
    if (!employee) {
      return res.status(404).json({ message: "Employee does not exist" });
    }
    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id, req.body);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getEmployees,
  getEmployee,
  createEmployees,
  updatedEmployee,
  deleteEmployee,
};
