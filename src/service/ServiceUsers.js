import { PrismaClient } from '@prisma/client'
import {formatUpdateArray} from '../commons/utils'

const prisma = new PrismaClient({
    rejectOnNotFound: true,
})

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

                    History:{
                        create:[
                            {
                                peso: body.peso,
                                altura: body.altura,
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
    
}

module.exports = new User();
