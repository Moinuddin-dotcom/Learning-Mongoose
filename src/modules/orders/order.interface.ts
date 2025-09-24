// import { IOrderMethods } from './order.interface';
import { Model, Types } from "mongoose"


export interface IOrder {
    user: Types.ObjectId;
    mango: Types.ObjectId;
    quantity: number;
    totalPrice: number;
    status: string;
    address: {
        zipcode: string;
        state: string;
        country: string;
        street: string;
    }
}

export interface IOrderMethods {
    // For instance
    checkStock(id: string): Promise<any>;
}

export interface IOrderModel extends Model<IOrder, {}, IOrderMethods> {
    // For static method
    checkStock(id: string, quantity: number): Promise<any>;
}