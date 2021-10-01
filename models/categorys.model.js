const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name: { type: String, required: true }
}, {
    versionKey: false,
    timestamp: true
})

const category = mongoose.model('category', categorySchema);

module.exports = category;