import foodList from '../fakeApi/api'
import {simplifyString} from '../commons/utils'

class ServiceFood{

    async getAll(){
        return await foodList.then((el) => el)
    }

    async byName(body){
        let comidaNome = simplifyString(body.nome)
        let arrFood = [];
    
        await foodList.then((el)  => {
            el.forEach(food => {
                let simplifyed = simplifyString(food.description)
                if( simplifyed.includes( comidaNome ) ){
                    arrFood.push(food)
                }
            })
        })
        return arrFood;
    }
}

module.exports = new ServiceFood();