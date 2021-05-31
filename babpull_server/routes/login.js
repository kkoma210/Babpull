var express = require('express');
var router = express.Router();
const db = require("../db");

router.post('/register', (req, res) => {
    var id = req.body.id;
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    db.add(id, username, password, (result) => {
        res.json(result);
    });
});

router.post('/', (req, res) => {
    var id = req.body.id;
    var password = req.body.password;
    console.log(id, password);
    db.check(id, password, (result) => {
        console.log(result);
        if(result == null) res.send("login failed");
        else res.send(`Hello ${id}`);
    });
});

module.exports = router;
