import { model, Schema } from "mongoose";
import { IOrder, IOrderMethods, IOrderModel } from "./order.interface";
import { Mango } from "../mango/mango.model";

const orderAddressSchema = new Schema({
    zipcode: String,
    state: String,
    country: String,
    street: String,
})


const orderSchema = new Schema<IOrder, IOrderModel, IOrderMethods>({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mango: { type: Schema.Types.ObjectId, ref: "Mango", required: true },
    quantity: { type: Number, min: 1, required: true },
    totalPrice: { type: Number, min: 1 },
    status: { type: String, required: true },
    address: { type: orderAddressSchema, required: true }
})

orderSchema.pre("save", async function () {
    // console.log("Doc for pre", this)

    const mango = await Mango.findById(this.mango)
    if (!mango) throw new Error("Mango not found")
    this.totalPrice = mango.Price * this.quantity
})

orderSchema.method("checkStock", async function checkStock() {
    const order = this as IOrder
    const product = await Mango.findById(order.mango)
    if (!product) throw new Error("Mango not found")
    if (product.Stock < order.quantity) throw new Error("Insufficient stock")
    return true
})

orderSchema.static("checkStock", async function checkStock(id, quantity) {
    // const order = this as IOrder
    const product = await Mango.findById(id)
    if (!product) throw new Error("Mango not found")
    if (product.Stock < quantity) throw new Error("Insufficient stock")
    return true
})


const Order = model<IOrder, IOrderModel>("Order", orderSchema)

export default Order;