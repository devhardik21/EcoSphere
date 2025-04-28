import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { DBconnect } from "./db/index.js";
import { UserLogin, UserRegister } from "./controllers/user.controller.js";
dotenv.config();

// console.log(`logging in the server :
// RT :${process.env.REFRESH_TOKEN_SECRET},
// AT :${process.env.ACCESS_TOKEN_SECRET},
// Port:${process.env.PORT}`);


//database connection 
DBconnect();

const app = express();

//using pre-defined middlewares 
app.use(cors());
app.use(cookieParser()) ; // cookie ka format detect krleta hai and then converts it into nice objects !
app.use(express.json()) ; // parses json and convert it into objects !

// for checking if it is working or not 
app.get('/',(req, res)=>{
    res.send("Welcome to the backend of the EcoSphere"); 
})


// all the routes are defined here
app.post("/api/register",UserRegister) ;
app.post("/api/login",UserLogin) ;

// making the server to listen at the purticular port and here the port is coming from the .env file....otherwise hum manually bhi enter kr skte the port....but it is an good practice to keep important details like this in .env file

app.listen(process.env.PORT,()=>{
    console.log("We are successfully listening on the port",process.env.PORT);
})



