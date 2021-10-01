const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    Email_id: { type: String, unique: true, required: true },
    moblie_number: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        unique: true,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model('user', userSchema);