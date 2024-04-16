import mongoose from "mongoose";
import dotenv from "dotenv";

/**dot env file configuration */
dotenv.config();

/**mongoDB connection to database */
export const connectDB = async() => {
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB CONNECTED`.underline.italic.blue);
}
catch(error){
        console.log(`Error : ${error.message}`.bold.red);
    }

}