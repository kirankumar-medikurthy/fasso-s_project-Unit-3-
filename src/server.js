const express = require('express');
const app =express();
const path = require("path");
const session = require("express-session");

const connect = require("../configs/db");
const Signup = require("../models/signup.model");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  }))

const fooditemController = require("../controllers/fooditem.controller");
const categoryItemController = require("../controllers/category.controller");


app.use("/fooditems", fooditemController);
app.use("/categorys", categoryItemController);



app.listen(7878, async()=>{
	await connect()
    console.log('listening on port 2020');
})

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/src/public/css'))
app.use('/img', express.static(__dirname + '/src/public/images'))
app.use('/js', express.static(__dirname + '/public/scripts'))





app.get("/index", (req, res) => {
	try {
		res.render("index");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/collections", async(req, res) => {
	try {
		res.render("collections");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})

app.get("/profile", async (req, res) => {
	try {
		const name =  req.session.user.Name;
		const mobile = req.session.user.Phone;
		const email = req.session.user.email;
		res.render("profile",{name,mobile,email});
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



app.get("/signup", (req, res) => {
	res.render("signup");
})

app.post("/signup", async (req, res) => {
	const registered = await Signup.create(req.body);
	setTimeout(() => {
	res.render("index");	
	},1000)

})

app.get("/login",(req, res)=> {

	return res.render("login");
})

app.post("/login", async (req, res) => {
	try {
		const number = req.body.Phone;
		const user = await Signup.findOne({ Phone: number });

		if (user) {
			req.session.user = user
			res.redirect("/collections");
		}

	} catch (error) {
		res.status(400).send("Not matched");
	}
})


