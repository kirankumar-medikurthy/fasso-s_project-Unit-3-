const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    food_name: { type: String, required: true },
    img_src: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    boughtTime: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    veg_NonVeg: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true }
}, {
    versionKey: false,
    timestamps: true
})

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;