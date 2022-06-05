import {formatUpdateArray} from '../commons/utils'
import { prisma } from "../commons/db"

class User{
    async getAll(){
        try{
            return await prisma.Users.findMany()
        }catch(e){
            return e.meta.cause
        }
    }

    async getBy(where){

        try{
            return await prisma.Users.findMany({where})
        }catch(e){
            return e.meta.cause
        }
    }

    async create(body){
        try{
            return await prisma.Users.create({
                data:{
                    name: body.name,
                    email: body.email,
                    nascimento: new Date(body.nascimento),
                    sex: body.sex,
                    altura: body.altura,

                    History:{
                        create:[
                            {
                                peso: body.peso,
                            }
                        ]
                    }
                }
            })
        }catch(e){
            return e.meta
        }
    }

    async update(body){
        let user = formatUpdateArray(body)
        
        try{
            return await prisma.Users.update({
                where:{
                    id: user[1]
                },
                data: user[0]
            })
        }catch(e){
            return e.meta.cause
        }
    }   

    async insertFood(body){
        try{
            return await prisma.FoodsEated.create({
                data:{
                    userId: body.userId,
                    foodId: body.foodId,
                    amount: body.amount,
                }
            })
        }catch(e){
            return e
        }
    }
}

module.exports = new User();
