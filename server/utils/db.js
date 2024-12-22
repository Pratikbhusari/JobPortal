import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jobportal');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
        console.log("mongo db conntion error")
    }
}
export default connectDB;