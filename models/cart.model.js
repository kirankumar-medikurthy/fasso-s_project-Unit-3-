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

// module.exports = function cart(oldcart){
//     this.items=oldcart.items,
//     this.tqty = oldcart.tqty;
//     this.ttotal =oldcart.ttotal;

//     this.add = function(item, id){
//         var stored = this.items[id];
//         if(!stored){
//             stored = this.items[id] = {item:item, qty:0, price:0}
//         }
//         stored.qty++;
//         stored.price = 299 * stored.qty;
//         this.tqty++;
//         this.ttotal+=stored.price; 
//     }

//     this.genArr = function(){
//         var arr = [];
//         for(var id in this.items){
//             arr.push(this.items[id])
//         }
//         return arr;
//     }
// };