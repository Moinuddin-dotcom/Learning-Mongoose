import { Request, Response } from "express";
import User from "./user.model"

const registerUser = async (req: Request, res: Response) => {
    const payload = req.body;
    const user = new User(payload)
    const data = await user.save()
    res.send({
        success: true,
        message: "User Registerd successfully",
        data
    })
}
const getUsers = async (req: Request, res: Response) => {
    const data = await User.find()
    res.send({
        success: true,
        message: "User Retrive successfully",
        data
    })
}

export { registerUser, getUsers }
