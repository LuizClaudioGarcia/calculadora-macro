

import ControllerUser from '../controllers/ControllerUser'

import { Router } from "express";
const routes = new Router();


routes.get("/getAllUsers", ControllerUser.getAllUsers )
routes.get("/getUsersBy", ControllerUser.getUserBy )

routes.post("/createNewUser", ControllerUser.createUser )
routes.post("/updateUser", ControllerUser.updateUser )


module.exports = routes;
