<<<<<<< HEAD
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    food_name: { type: String, required: true },
    price: { type: Number, required: true },
    veg_NonVeg: { type: String, required: true },

})

const Cart = mongoose.model('cart', cartSchema);

=======
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

>>>>>>> e21eb5e071fad4b68271a39d86a38b79b3058aed
module.exports = Cart;