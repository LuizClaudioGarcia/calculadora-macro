import ControllerFood from '../controllers/ControllerFood'

import { Router } from "express";
const routes = new Router();

routes.get("/getAllFoods", ControllerFood.getAllFoods )
routes.get("/getFoodByName", ControllerFood.getFoodByName)
routes.get("/getFoodById", ControllerFood.getFoodById)

module.exports = routes;