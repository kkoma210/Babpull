const LoginModel = require("./models/login");

function add(id, username, password, callback){
    const newItem = new LoginModel({
        id, username, password
    });
    newItem.save((error, result) => {
        callback(result);
    });
}

function check(id, password, callback){
    LoginModel.findOne({id: id, password: password}).exec((err, result) => {
        callback(result);
    });
}

module.exports ={
    add,
    check
};