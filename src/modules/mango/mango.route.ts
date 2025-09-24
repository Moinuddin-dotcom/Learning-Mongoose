import { Router } from "express";
import { mangoController } from "./mango.controller";


const mangoRoute = Router()

mangoRoute.get('/:mangoId', mangoController.getMangosById)
mangoRoute.patch('/:mangoId', mangoController.updateMango)
mangoRoute.delete('/:mangoId', mangoController.deleteMangoById)
mangoRoute.post('/', mangoController.createMango)
mangoRoute.get('/', mangoController.getMangos)


export default mangoRoute;