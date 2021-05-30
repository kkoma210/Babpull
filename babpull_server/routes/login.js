var express = require('express');
var router = express.Router();
const db = require("../db");

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;
