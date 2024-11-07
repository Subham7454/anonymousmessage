import mongoose, { Schema, Document } from "mongoose";

 export interface Message extends Document{
    content: string;
    createdAt:Date
}

const MessageSchema: Schema<Message> = new Schema({

    content: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        required: true,
        default:Date.now
    }

})

 export interface User extends Document{
     username: string;
     email: string;
     password: string;
     verifyCode: string;
     verifyCodeExpiry: Date;
     isVerified: boolean;
     isAcceptingMessage: boolean;
     messages: Message[];
     
     
}

const UserSchema: Schema<User> = new Schema({

    username: {
        type: String,
        required:[true,"username is required"]
    },
    email: {
        type: String,
        required: [true, "email is reuired"],
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please provide valid email"]
    },
     password: {
        type: String,
        required:[true,"password is required"]
    },
      verifyCode: {
        type: String,
        required:[true,"verifycode is reuired"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true,"verifycode expiry true"],
        default:Date.now
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    isAcceptingMessage: {
        type: Boolean,
        default:true
    },
    messages:[MessageSchema]

})
const UserModel = (mongoose.models.Users as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))
export default UserModel