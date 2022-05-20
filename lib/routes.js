'use strict';

var _functions = require('./functions');

var express = require('express');
var app = express();
app.use(express.json());

app.get("/getAllFoods", async function (req, res) {
    var result = await (0, _functions.getAllFoods)();
    return res.json(result);
});

app.get("/getFoodByName", async function (req, res) {
    var result = await (0, _functions.getFoodByName)(req.body);
    return res.json(result);
});

module.exports = app;