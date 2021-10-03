const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    food_name: { type: String, required: true },
    img_src: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    boughtTime: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    veg_NonVeg: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

const Order = mongoose.model('order', orderSchema);

module.exports = Order;