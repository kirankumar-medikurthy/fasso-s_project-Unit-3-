const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    food_name: { type: String, required: true },
    price: { type: Number, required: true },
    veg_NonVeg: { type: String, required: true },

})

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;