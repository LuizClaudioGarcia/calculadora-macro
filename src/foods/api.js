import { prisma } from "../commons/db"

export default prisma.FoodList.findMany();