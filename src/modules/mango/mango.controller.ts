import { Request, Response } from "express";
import { Mango } from "./mango.model";


const createMango = async (req: Request, res: Response) => {
    try {
        const data = await Mango.create(req.body)

        res.send({
            success: true,
            message: "Mango Created successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Error while creating mango",
            error
            // data
        })
    }
}
const getMangos = async (req: Request, res: Response) => {
    try {
        const data = await Mango.find()

        res.send({
            success: true,
            message: "Mango getted successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Error while getting mango",
            error
            // data
        })
    }
}

const getMangosById = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId
        const data = await Mango.findById(mangoId)

        res.send({
            success: true,
            message: "Single Mango getted successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Error while getting single mango",
            error
            // data
        })
    }
}

const updateMango = async (req: Request, res: Response) => {
    try {
        const mangoId = req.params.mangoId
        const data = await Mango.findByIdAndUpdate(mangoId, req.body, {
            new: true,
            runValidators: true
        })
        res.send({
            success: true,
            message: "Single Mango updated successfully",
            data
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Error while updating mango data",
            error
            // data
        })
    }
}

const deleteMangoById = async (req: Request, res: Response) => {
    const mangoId = req.params.mangoId
    const data = await Mango.findByIdAndDelete(mangoId)
    res.send({
        success: true,
        message: "Single Mango deleted successfully",
        data
    })
}

export const mangoController = {
    createMango,
    getMangos,
    getMangosById,
    updateMango,
    deleteMangoById
}