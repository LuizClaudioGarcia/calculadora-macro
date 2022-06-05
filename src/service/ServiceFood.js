import { foodList } from '../foods/api'
import { prisma } from "../commons/db"
import {simplifyString} from '../commons/utils'

class ServiceFood{
    async getAll(){
        try{
            return await prisma.FoodList.findMany()
        }catch(e){
            return e
        }
    }

    async byName(body){
        try{
            return await prisma.FoodList.findMany({
                where:{
                    name: {
                        contains: body.nome
                    }
                }
            })
        }catch(e){
            return e
        }
    }

    async byId(body){
        try{
            return await prisma.FoodList.findMany({
                where:{
                    id: {
                        contains: body.id
                    }
                }
            })
        }catch(e){
            return e
        }
    }
}

module.exports = new ServiceFood();