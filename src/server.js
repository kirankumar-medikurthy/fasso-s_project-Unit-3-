const express = require('express');

const app = express();

const connect = require("./configs/db")


app.listen(7878, async() => {
    await connect();
    console.log("listhening on the port 7878");
})