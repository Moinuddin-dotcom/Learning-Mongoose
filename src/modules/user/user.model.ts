import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";


const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true, min: 3, max: 255 },
    email: {
        type: String, required: true, validate: {
            validator: (v: string) => {
                return /.+@.+\.com$/.test(v);
            },
            message: props => `${props.value} must contain @ and .com`
        },
        unique: true,
        // immutable: true
    },
    phone: {
        type: String, required: [true, "Your phone number is not valid"],
        validate: {
            validator: (v: string) => {
                return /^(018|016|013|017|019|014)\d{8}$/.test(v);
            },
            message: props => `${props.value} must be 11 digit and must start with BD number code!`
        }
    },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: { values: ["Admin", "Customer"], message: '{VALUE} is not supported' },
        required: true
        // default: "Customer" 
    }
})

const User = model<IUser>("User", userSchema)

export default User;

