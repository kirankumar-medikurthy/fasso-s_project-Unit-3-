const express = require('express');

const crudController = require('./crud.controller');

const fooditems = require("../models/fooditems.model");

const router = express.Router();

// router.get("", crudController.get(fooditems));

router.get("", crudController.FoodItemSearch(fooditems));

router.post("", crudController.post(fooditems));

router.patch("/:id", crudController.patch(fooditems));

router.delete("/:id", crudController.Delete(fooditems));

router.get("/:id", crudController.findOne(fooditems));


module.exports = router;