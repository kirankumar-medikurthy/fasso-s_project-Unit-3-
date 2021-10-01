const express = require('express');
const app =express();
const path = require("path");
const session = require("express-session");
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.locals.error = null;
const connect = require("../configs/db");
const Signup = require("../models/signup.model");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  }))



  const fooditems = require("../models/fooditems.model");
  const CategoryItemsModels = require("../models/categorys.model");
  const cartModel = require("../models/cart.model");
  
  const fooditemController = require("../controllers/fooditem.controller");
  const categoryItemController = require("../controllers/category.controller");
  const cartController = require("../controllers/cart.controller");
const { NONAME } = require('dns');
  
app.set("view engine", "ejs");

app.use("/fooditems", fooditemController);
app.use("/categorys", categoryItemController);
app.use("/cart", cartController);



app.listen(2021, async()=>{
	await connect()
    console.log('listening on port 2021');
})

app.use(express.static('public'));
app.use('/public', express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + '/src/public/images'))
app.use('/js', express.static(__dirname + '/public/scripts'))


app.get("/collections", async function (req, res) {
	const category = await CategoryItemsModels.find();
	const food = await fooditems.find().limit(20).exec();
	res.render("collections", {
		category: category,
		foods: food
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


app.get("/collections", async function (req, res) {
	const category = await CategoryItemsModels.find();
	const cart = await cartModel.find()
	const food = await fooditems.find({ veg_NonVeg: {$eq:'Non veg' }}).limit(20).exec();
	res.render("collections", {
		category: category,
		foods: food,
		cart: cart
	})
})


// app.get("/collections/add-cart", async (req, res) => {
// 	try {
// 		res.render("index");
// 	} catch (err) {
// 		return res.status(400).json({ err: err.message });
// 	}
// })

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


// app.get("/collections/:id&address", async (req, res) => {
// 	try {
// 		res.render("address");

// 	} catch (err) {
// 		return res.status(400).json({ err: err.message });
// 	}
// })

app.get("/order", async (req, res) => {
	try {
		res.render("order");
	} catch (err) {
		return res.status(400).json({ err: err.message });
	}
})



// app.get("/collections**es**/:id?order", async (req, res) => {
// 	try {
// 		res.render("order");
// 	} catch (err) {
// 		return res.status(400).json({ err: err.message });
// 	}
// })

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


// app.get('/:id',async function (req, res,next){
// 	var prodId = req.params.id;
// 	const food = await fooditems.find().limit(20).exec();
// 	var cart = new cartModel(req.session.cart ?req.session.cart:{items:{}} )
// 	fooditems.findById(prodId, function(err, res){
// 		if(err){
// 			return res.redirect('/');
// 		}
// 			cart.add(prodId, food.id);
// 			req.session.cart = cart;
// 			console.log(req.session.cart);
// 			next()
// 	})
// });