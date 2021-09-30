const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    Phone: { type: Number, required: true, unique: true },
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, {
    versionKey: false,
    timestamps: true,
});

const Signup = mongoose.model("signup", signupSchema);


module.exports = Signup;