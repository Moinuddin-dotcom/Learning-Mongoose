import { Request, Response } from "express";
import Order from "./order.model";



const createOrder = async (req: Request, res: Response) => {
    try {

        const checkStock = await Order.checkStock(req.body.mango, req.body.quantity)
        if (!checkStock) throw new Error("Insufficient stock")
        const order = await Order.create(req.body)


        // const order = new Order(req.body)
        // const orderStock = await order.checkStock(req.body.mango)
        // if (!orderStock) throw new Error("Insufficient stock")
        // await order.save()
        res.send({
            success: true,
            message: "Order Created successfully",
            data: order
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Order Created not successfully",
            error
        })
    }
}


const getOrder = async (req: Request, res: Response) => {
    try {
        const order = await Order.find().populate("user").populate("mango")
        res.send({
            success: true,
            message: "Order getted successfully",
            data: order
        })
    } catch (error) {
        res.send({
            success: false,
            message: "Unable to get order",
            error
        })
    }
}


export const orderController = {
    createOrder, getOrder
}