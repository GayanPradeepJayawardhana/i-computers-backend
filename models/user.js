import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

    {
        email:{
            type:String,
            unique:true,
            required: true
        },
        firstname:{
            type:String,
            required: true
        },
        lastname:{
            type:String,
            required:true,

        },
        password:{
            type: String,
            required: true
        },
        isadmin:{
            type:Boolean,
            required: true,
            default: false
        },
        isblocked:{
            type:Boolean,
            required: true,
            default: false
        },
        isemailverified:{
            type:Boolean,
            required: true,
            default: false
        },
        image:{
            type: String,
            required: true,
            default:"/default profile.png"
        }
    }

)


const User = mongoose.model("user",userSchema)
export default User