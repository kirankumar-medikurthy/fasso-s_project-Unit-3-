const express = require('express');
const app = express();
const path = require("path")

const connect = require("../configs/db");
app.use(express.json());

const fooditems = require("../models/fooditems.model");
const CategoryItemsModels = require("../models/categorys.model");
const cartModel = require("../models/cart.model");

const fooditemController = require("../controllers/fooditem.controller");
const categoryItemController = require("../controllers/category.controller");
const cartController = require("../controllers/cart.controller");

app.use("/fooditems", fooditemController);
app.use("/categorys", categoryItemController);
app.use("/cart", cartController);

app.listen(7878, async () => {
	await connect()
	console.log('listening on port 2020');
})

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/public', express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + '/src/public/images'))
app.use('/js', express.static(__dirname + '/public/scripts'))


app.get("/collections", async function (req, res) {
	const category = await CategoryItemsModels.find();
	const food = await fooditems.find().limit(20).exec();
	const cart = await cartModel.find()
	res.render("collections", {
		category: category,
		foods: food,
		cart: cart
	})
})


app.get("/collections/:id", async function (req, res) {
	const category = await CategoryItemsModels.find();
	const food = await fooditems.find({ category: req.params.id }).limit(20).exec();
	const cart = await cartModel.find()
	res.render("collections", {
		category: category,
		foods: food,
		cart: cart
	})
})

app.post('/add-cart', async function (req, res) {
	res: res.json()
});

app.get('/cart/:food', async function (req, res) {
	res: res.json()
});

app.get("//collections/add-cart", async (req, res) => {
	try {
		res.render("index");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})


app.get("/index", async (req, res) => {
	try {
		res.render("index");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

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


app.get("/address", async (req, res) => {
	try {
		res.render("address");
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


app.post("/shippingaddress", async (req, res) => {
	const address = await Address.create(req.body);
	return res.status(201).render(address);
})

app.get("/shippingaddress", async (req, res) => {
	const address = await Address.findOne().lean().exec();
	return res.status(200).render(address);
})


