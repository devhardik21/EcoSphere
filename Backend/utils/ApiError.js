class ApiError extends Error{
    constructor(ErrorCode,message="there is an error in your code",error=[],stack=""){
        super(message) ; // calls the class which it extends...it is like activating the error by calling the Error class
        this.message = message ; 
        this.ErrorCode = ErrorCode ; 
        this.success = false ; 
        this.data = null ; 
        this.error = error ; 
        if(stack){
            this.stack = stack ;
        }
        else{
            Error.captureStackTrace(this , this.constructor) ; 
        }
   
    }

}
export {ApiError}  ;

