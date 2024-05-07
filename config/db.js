import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://beauty-swift:1234512345@cluster0.c0wkrjo.mongodb.net/beauty-swift').then(()=>
    console.log("DB Connected"));
}