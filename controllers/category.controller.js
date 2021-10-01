const express = require('express');

const router = express.Router();

const crudController = require("./crud.controller");

const CategoryItemsModels = require("../models/categorys.model");

// router.get("", crudController.get(CategoryItemsModels));

router.get("", async function(req, res) {
    const category = await CategoryItemsModels.find().lean().exec();

    res.render("collections", {
        category: category
    })
})

router.post("", crudController.post(CategoryItemsModels));

router.patch("/:id", crudController.patch(CategoryItemsModels));

router.delete("/:id", crudController.Delete(CategoryItemsModels));

router.get("/:id", crudController.findOne(CategoryItemsModels));

module.exports = router;