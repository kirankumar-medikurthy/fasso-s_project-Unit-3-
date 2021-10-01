const express = require('express');

const crudController = require('./crud.controller');

const fooditems = require("../models/fooditems.model");

const router = express.Router();

<<<<<<< HEAD
=======
// router.get("", crudController.get(fooditems));
>>>>>>> main

router.get("", crudController.FoodItemSearch(fooditems));

router.post("", crudController.post(fooditems));

router.patch("/:id", crudController.patch(fooditems));

router.delete("/:id", crudController.Delete(fooditems));

router.get("/:id", crudController.findOne(fooditems));


<<<<<<< HEAD


    module.exports = router;
=======
module.exports = router;
>>>>>>> main
