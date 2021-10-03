const mongoose = require('mongoose');


const cart2Schema = new mongoose.Schema({
    food_name: { type: String, required: true },
    price: { type: Number, required: true },

}, {
    versionKey: false,
    timestamps: true
})

const Cart2 = mongoose.model('cart2', cart2Schema);

module.exports = Cart2;