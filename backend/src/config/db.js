import mongoose from 'mongoose'


async function connectDB(MONGO_URI) {
    try {
        const conn = await mongoose.connect(`${MONGO_URI}`)
        console.log("monogodb connected ! ");
    } catch (error) {
        console.log("Error in connectDB : ", error.message);
    }
}


export default connectDB
