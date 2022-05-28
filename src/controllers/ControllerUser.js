import userService from '../service/ServiceUsers'

class ControllerUser{
    async getAllUsers(req, res){
        return res.json( await userService.getAll().then( (e) => e));
    }

    async getUserBy(req,res){
        let query = req.body.id ? {id: req.body.id} : {email: req.body.email}

        if(query.id || query.email){
            return res.json( await userService.getBy( query ).then((e) => e));
        }else{
            return res.json( "Parâmetros inválidos");
        }
    }

    async createUser(req,res){
        let result = await userService.create( req.body ).then((e) => e)
        return res.json(result)
    }

    async updateUser(req,res){
        return res.json(await userService.update( req.body ).then((e) => e))
    }
    
}

module.exports = new ControllerUser()