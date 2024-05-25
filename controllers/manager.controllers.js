const Manager = require("../models/manager.model");

const getManagers = async (req, res) => {
  try {
    const manager = await Product.find({});
    res.status(200).json(manager);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createManager = async (req, res) => {
  try {
    const manager = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getManagers,
  createManager,
};
