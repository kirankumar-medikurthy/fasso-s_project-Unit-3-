const express = require('express');

const ordermodel = require('../models/order.model');
const crudController = require("./crud.controller");
const router = express.Router();



router.post("", crudController.post(ordermodel));

router.get("", crudController.get(ordermodel));

router.get("/:id", crudController.findOne(ordermodel));

router.patch("/:id", crudController.patch(ordermodel));

router.delete("/:id", crudController.Delete(ordermodel));


module.exports = router;