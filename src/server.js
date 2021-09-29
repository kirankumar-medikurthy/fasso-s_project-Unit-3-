const express = require('express');
const app =express();
const path = require("path")

app.listen(2020, ()=>{

    console.log('listening on port 2020');
})

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/src/public/css'))
app.use('/img', express.static(__dirname + '/src/public/images'))
app.use('/js', express.static(__dirname + '/public/scripts'))



app.get("/collections", async (req, res) => {
	try {
		res.render("collections");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/profile", async (req, res) => {
	try {
		res.render("profile");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})


app.get("/order", async (req, res) => {
	try {
		res.render("order");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/payment", async (req, res) => {
	try {
		res.render("payment");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})