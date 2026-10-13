import mongoose from "mongoose"



const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.error("connection failed",error)
    }
}


export default connectDb;



