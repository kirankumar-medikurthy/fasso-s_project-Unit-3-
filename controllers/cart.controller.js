const express = require('express');

const router = express.Router();

const crudController = require("./crud.controller");
const cart = require("../models/cart.model");

router.get("", crudController.get(cart));

router.post("", crudController.post(cart));

router.patch("/:id", crudController.patch(cart));

router.delete("/:id", crudController.Delete(cart));

router.get("/:id", crudController.findOne(cart));

module.exports = router;