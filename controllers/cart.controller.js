<<<<<<< HEAD
const express = require('express');

const router = express.Router();

const crudController = require("./crud.controller");
const cart = require("../models/cart.model");

router.get("", crudController.get(cart));

router.post("", crudController.post(cart));

router.patch("/:id", crudController.patch(cart));

router.delete("/:id", crudController.Delete(cart));

router.get("/:id", crudController.findOne(cart));

=======
const express = require('express');

const router = express.Router();

const crudController = require("./crud.controller");
const cart = require("../models/cart.model");

router.get("", crudController.get(cart));

router.post("", crudController.post(cart));

router.patch("/:id", crudController.patch(cart));

router.delete("/:id", crudController.Delete(cart));

router.get("/:id", crudController.findOne(cart));

>>>>>>> e21eb5e071fad4b68271a39d86a38b79b3058aed
module.exports = router;