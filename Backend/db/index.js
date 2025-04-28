import mongoose from "mongoose";
import dotenv from "dotenv" ; 
dotenv.config() ;
const DbName = "EcoDatabase"
const DBconnect = async () => {
    try {
            console.log(process.env.MONGO_URL);
            const connect = await mongoose.connect(`${process.env.MONGO_URL}/${DbName}`) ; 

            console.log("Database is successfully connected");

    } catch (error) {
            console.log("Oops ! we got an error while connecting to the database",error);
    }
};

export {DBconnect} ;