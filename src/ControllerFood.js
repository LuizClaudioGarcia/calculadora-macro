import foodService from './ServiceFood'


class ControllerFood{
    async getAllFoods(req, res){
        console.log(await foodService.serviceGetAllFoods)
        return res.send(await 'Teste');
        
    }
    async getFoodByName(req, res){
        let result = await getFoodByName(req.body)
        return res.json(result)
    }
}

module.exports = new ControllerFood()