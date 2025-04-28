import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Making register and login controllers

const UserRegister = AsyncHandler( async (req , res) => {
   
        // extracting user details from the frontend 

        const {name , email , occupation , password} = req.body ; 

        //checking if all the fields are entered by the user or not 

        if(!name.trim() || !email.trim() || !occupation.trim() || !password.trim()){
            throw new ApiError(400,"please fill all the fields") 
        }

        // checking if the email already exists
       const UserExist =  await User.findOne({email}) ; 

       if(UserExist){
            throw new ApiError(401,"This email already exists")  ;
       }
       // user is fine....it can be added to the database now 

       const user = await User.create({name , email , occupation , password}) ; 

       console.log("user creation successfull");
       const FinalUser =  await User.findById(user._id).select("-password -RefreshToken").exec() ; 

       if(FinalUser){
            return res.json( new ApiResponse(200,"user is successfully created",user) ); 
       }
       else{
            throw new ApiError(401,"the user havent been registered in the database ") ;
       }
}
)


// user login 


const UserLogin = AsyncHandler(async(req , res) => {
    //extracting the name and the password
    const {email , password} = req.body ; 

    const user = await User.findOne({email}) ;
    console.log(user);
    if(!user){
        throw new ApiError(402, "this email does not exist!") ; 
    }

    const CorrectPassword = await user.isPasswordCorrect(password) ;  

    if(!CorrectPassword){
        throw new ApiError(400,"Invalid Credentials")  ;
    }
    
    // everything good till now....generating user's refresh token and access token 

    const AccessToken = user.GenerateAccessToken() ;
    const RefreshToken = user.GenerateRefreshToken() ;

    // now sending the tokens in the form ok cookies 

    const options = {
        httpOnly : true ,
        path : '/'
    }

    // sending the final responses to the user and also setting up the cookies

    res.cookie("AccessToken",AccessToken, options) 
    .cookie("RefreshToken",RefreshToken, options)
    .json( new ApiResponse(200,"Login Successfull",{
        user , RefreshToken , AccessToken
    })) 
})

export { UserLogin , UserRegister} 
