<<<<<<< HEAD
const addressSchema = new mongoose.Schema({
    flatNo: { type: String, require: true },
    landmark: { type: String, require: true },
}, {
    versionKey: false,
    timestamps: true
})

const Address = mongoose.model("address", addressSchema);
=======
const addressSchema = new mongoose.Schema({
    flatNo: { type: String, require: true },
    landmark: { type: String, require: true },
}, {
    versionKey: false,
    timestamps: true
})

const Address = mongoose.model("address", addressSchema);
>>>>>>> e21eb5e071fad4b68271a39d86a38b79b3058aed
module.exports = Address;