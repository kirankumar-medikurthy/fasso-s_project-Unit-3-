const addressSchema = new mongoose.Schema({
    flatNo: { type: String, require: true },
    landmark: { type: String, require: true },
}, {
    versionKey: false,
    timestamps: true
})

const Address = mongoose.model("address", addressSchema);
module.exports = Address;