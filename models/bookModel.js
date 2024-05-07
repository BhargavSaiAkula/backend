import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        shop_name:{type:String,required:true},
        location:{type:String,required:true},
        timing:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:String,required:true},
        serivce:{type:String,required:true},
        category:{type:String,requried:true}
    }
)

const bookModel = mongoose.models.book || mongoose.model("book",BookSchema);

export default bookModel;