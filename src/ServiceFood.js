import foodList from './fakeApi/api'

class ServiceFood{

    async serviceGetAllFoods(){
        console.log('Chegou no Service')
        return await foodList.then((el)  => {
            return el;
        })
    }

}

module.exports = new ServiceFood();