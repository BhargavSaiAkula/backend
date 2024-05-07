// import express from "express"
// import addBook from "../controllers/bookControllers";
// import multer from "multer"

// const bookRouter=express.Router();

// //image Storge engine

// const Storge = multer.diskStorage(
//     {
//         destination:"uploads",
//         filename:(req,file,cd)=>{
//             return cd(null,'${Date.now()}${file.orignalname}')
//         }
//     }
// )

// const upload= multer({storage:storage})

// bookRouter.post("/add",upload.single("image"),addBook)

// export default bookRouter;
import express from "express";
import addBook from "../controllers/bookcontroller.js"; // Corrected import path
import multer from "multer";

const bookRouter = express.Router();

// Image Storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`); // Corrected spelling of 'originalname'
    }
});

const upload = multer({ storage: storage });

bookRouter.post("/add", upload.single("image"), addBook);

export default bookRouter;
