const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        type: String
    },
    password: {
        type: String
    }
})

const LoginModel = mongoose.model("login", schema);
module.exports = LoginModel;