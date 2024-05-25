const express = require("express");
const Manager = require("../models/manager.model.js");
const router = express.Router();

const {
  getManagers,
  createManager,
} = require("../controllers/manager.controllers.js");

router.get("/", getManagers);

router.post("/:id", createManager);
