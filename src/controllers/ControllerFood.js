import foodService from '../service/ServiceFood'

class ControllerFood{
    async getAllFoods(req, res){
        return res.json( await foodService.getAll().then( (e) => e));
    }
    async getFoodByName(req, res){
        return res.json( await foodService.byName(req.body).then( (e) => e));
    }
}

module.exports = new ControllerFood()