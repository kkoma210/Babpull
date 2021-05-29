const LoginModel = require("./models/login");

function add(id, password, callback){
    const newItem = new LoginModel({
        id, password
    });
    newItem.save((error, result) => {
        callback(result);
    });
}