const express = require('express');

const connect = require("./configs/db");

const app = express();

app.use(express.json());

const fooditemController = require("./controllers/fooditem.controller");

const categoryItemController = require("./controllers/category.controller");


app.use("/fooditems", fooditemController);

app.use("/categorys", categoryItemController);




app.listen(7878, async() => {
    await connect();
    console.log("listhening on the port 7878");
})