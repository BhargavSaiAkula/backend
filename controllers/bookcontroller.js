// import bookModel from "../models/bookModel.js";
// import fs from 'fs'

// //add book item

// const addBook = async (req,res) =>{

//  let image_filename ='${req.file.filename}';

//  const book = new bookModel({
     
//     shop_name:req.body.shop_name,
//     location:req.body,location,
//     price:req.body.price,
//     category:req.body.category,
//     timing:req.body.timing,
//     serivce:req.body.serivce,
//     image:image_filename
//  })

//  try{
//     await book.save();
//     res.json({success:true,message:"service Added"})
//  }catch(error){
//     console.log(error)
//     res.json({success:false,message:"Error"})
//  }

// }

// export default addBook;
import bookModel from "../models/bookModel.js";
import fs from 'fs';


// Add book item
const addBook = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const book = new bookModel({
        shop_name: req.body.shop_name,
        location: req.body.location,
        price: req.body.price,
        category: req.body.category,
        timing: req.body.timing,
        service: req.body.service,
        image: image_filename
    });

    try {
        await book.save();
        res.json({ success: true, message: "Service Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export default addBook;
