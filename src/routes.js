import {getAllFoods,getFoodByName} from './functions'

const express = require('express')
const app = express();
app.use(express.json());

app.get("/getAllFoods", async (req,res) => {
    let result = await getAllFoods()
    return res.json(result);
})

app.get("/getFoodByName", async (req,res) => {
    let result = await getFoodByName(req.body)
    return res.json(result)
})

module.exports = app;
