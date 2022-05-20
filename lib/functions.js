'use strict';

var _utils = require('./commons/utils');

var _api = require('./fakeApi/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Retorna todas as comidas presentes na lista
async function getAllFoods() {
    return await _api2.default.then(function (el) {
        return el;
    });
}

//Retorna uma comida com base no nome presente no corpo da requisição:
async function getFoodByName(body) {
    var comidaNome = (0, _utils.simplifyString)(body.nome);
    var arrFood = [];

    await _api2.default.then(function (el) {
        el.forEach(function (food) {
            var simplifyed = (0, _utils.simplifyString)(food.description);
            if (simplifyed.includes(comidaNome)) {
                arrFood.push(food);
            }
        });
    });
    return arrFood;
}

module.exports = { getAllFoods: getAllFoods, getFoodByName: getFoodByName };