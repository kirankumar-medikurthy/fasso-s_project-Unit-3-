const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://kiran:KiranFassos@cluster0.gant3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;