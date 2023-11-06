import mongoose from "mongoose";


const user = new mongoose.Schema({
        fullname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        confirmpassword:{
            type: String,
            required: true
        },
        role:{
            type: String,
            required: true,
            enum: ["admin", "user"]
        }
    })
     


export const UsersCollection = mongoose.model("users", user)