const express = require('express');
const app = express();
const path = require("path")
const session = require("express-session");
const flash = require('connect-flash');

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
const orderModel = require("../models/order.model");

const fooditemController = require("../controllers/fooditem.controller");
const categoryItemController = require("../controllers/category.controller");
const cartController = require("../controllers/cart.controller");
const orderController = require("../controllers/order.controller");

app.use("/fooditems", fooditemController);
app.use("/categorys", categoryItemController);
app.use("/cart", cartController);
app.use("/orders", orderController);



app.listen(7878, async() => {
    await connect()
    console.log('listening on port 7878');
})

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/public', express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + '/src/public/images'))
app.use('/js', express.static(__dirname + '/public/scripts'))



app.get("/collections", async function (req, res) {
	try {
		if (req.session.user.Name) {
			const category = await CategoryItemsModels.find().limit(20);
			const food = await fooditems.find().limit(20).exec();
			const cart = await cartModel.find().limit(20);
			const name = req.session.user.Name;
			res.render("collections", {
				category: category,
				foods: food,
				cart: cart,
				name
			})
		}
	} catch (err) {
		res.redirect('/collections')
	}
	
})

//fielter product by id
app.get("/collections/:id", async function (req, res) {
	try {
		if (req.session.user._id) {
			const name = req.session.user.Name;
			const category = await CategoryItemsModels.find();
			const food = await fooditems.find({ category: req.params.id }).limit(20).lean().exec();
			const cart = await cartModel.find()
			res.render("collections", {
				category: category,
				foods: food,
				cart: cart,
				name
			})
		}
	} catch (err) {
		res.redirect('/collections')
	}
	
})

app.delete('/orders/',async function(req, res){
	const items = await orderModel.remove({})
	const items1 = await cartModel.remove({})
	 res.send({ items,items1});
})

app.delete('/cart/:id;', async function(req, res){
    const food = await cartModel.findByIdAndDelete(req.params.id);
  res.send(food);
})

app.get("/index", async(req, res) => {
    try {
        res.render("index");
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
})



app.get("/profile",  async(req, res) => {
	try {
		if (req.session.user.Name) {
			const name = req.session.user.Name;
			const mobile = req.session.user.Phone;
			const email = req.session.user.email;
			res.render("profile", { name, mobile, email });
		}
	} catch (err) {
		res.redirect('/index')
	}
})

app.get("/collections", async(req, res) => {
    try {
        res.render("collections");
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
})

app.get("/profile", async(req, res) => {
    try {
        res.render("profile");
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
})


app.get("/address", async (req, res) => {
	try {
		if (req.session.user.Name) {
			const name = req.session.user.Name;
			const mobile = req.session.user.Phone;
			const email = req.session.user.email;
			res.render("address", {name,mobile,email});
		}
	} catch (err) {
		return res.redirect('/index');
	}
})

app.get("/order", async (req, res) => {
	try {
		if (req.session.user.Name) {
			const name = req.session.user.Name;
			const mobile = req.session.user.Phone;
			const email = req.session.user.email;
			res.render("order", {name,mobile,email});
		}
	} catch (err) {
			return res.redirect('/index');
	}
})

app.get("/payment", async (req, res) => {
	try {
		if (req.session.user.Name) {
			const name = req.session.user.Name;
			const mobile = req.session.user.Phone;
			const email = req.session.user.email;
			res.render("payment", {name,mobile,email});
		}
	} catch (err) {
		return res.redirect('/index');
	}
})


app.post("/shippingaddress", async(req, res) => {
    const address = await Address.create(req.body);
    return res.status(201).render(address);
})

app.get("/shippingaddress", async(req, res) => {
    const address = await Address.findOne().lean().exec();
    return res.status(200).render(address);
})




app.get("/signup", (req, res) => {
	res.render("signup");
})

app.post("/signup", async (req, res) => {
	const registered = await Signup.create(req.body);
	setTimeout(() => {
	res.redirect("index");	
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
		else {
			res.redirect('/index');
		}
	} catch (error) {
		res.status(400).send("Not matched");
	}
})

app.get("/logout",  (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			throw(err)
		}
		else {
			setTimeout(() => {
			res.redirect("/index");
			},1000)
		}
	})
})