import mongoose from "mongoose";

const dbConnection= async ()=>{
    
    try {
       await mongoose.connect(process.env.MongoURI);
       console.log('database connect sucessfully');
    } catch (error) {
        console.log('erorr from database');
    }
}

export default dbConnection;