import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";



const mangoSchema = new Schema<IMango>({
    Name: { type: String, trim: true, required: true },
    Variety: { type: String, trim: true, required: true },
    unit: { type: String, enum: ["KG", "TON"], default: "KG", required: true },
    Price: { type: Number, min: 0, required: true },
    Stock: { type: Number, min: 0, required: true },
    Origin: { type: String, trim: true, default: "Unknown" },
    Season: { type: String, enum: ["Summer", "Winter", "Autumn", "Spring"], required: true }
}, { timestamps: true })


const Mango = model<IMango>("Mango", mangoSchema)

export { Mango }