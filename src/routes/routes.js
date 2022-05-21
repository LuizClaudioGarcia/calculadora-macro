
import ControllerFood from '../controllers/ControllerFood'

const express = require('express')
const app = express();
app.use(express.json());

// Routes
app.get("/getAllFoods", ControllerFood.getAllFoods )
app.get("/getFoodByName", ControllerFood.getFoodByName)

module.exports = app;
