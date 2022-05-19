import {simplifyString} from './commons/utils'
import foodList from './fakeApi/api'


// Retorna todas as comidas presentes na lista
async function getAllFoods(){
    return await foodList.then((el)  => {
        return el;
    })
}

//Retorna uma comida com base no nome presente no corpo da requisição:
async function getFoodByName(body){
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
    return arrFood
}

module.exports = {getAllFoods,getFoodByName}
