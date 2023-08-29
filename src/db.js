import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost/esoils') puede no funcionar es mejor poner la ip
        await mongoose.connect('mongodb://127.0.0.1:27017/esoils')
        console.log('>>> DB is connected')
    } catch (error) {
        console.log(error)
    }
}