"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fs = require("fs");

var myPromise = new Promise(function (resolve, reject) {
    fs.readFile("./list/taco.json", "utf8", async function (err, data) {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            resolve((await JSON.parse(data)));
        }
    });
});

exports.default = myPromise;