"use strict";

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_routes2.default.listen(process.env.PORT, function () {
    console.log("Servidor esta rodando na porta process.env.PORT");
});