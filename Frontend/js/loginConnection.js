console.log("yes ! this script is loading");
const BASE_URI = 'http://localhost:8000/api';
const login_form = document.getElementById('login_forms');

login_form.addEventListener('submit', async(e) => {
    e.preventDefault() ;
    const email = document.getElementById('login-email').value ; 
    const password = document.getElementById('login-password').value ;
try {
    
        const response = await fetch(`${BASE_URI}/login`,{
            method : 'POST',
            headers : {'Content-Type': 'application/json'} , 
            body : JSON.stringify({email , password}) 
        })
    
        console.log(response); 
        const data = await response.json() ; 
    
        if(response.ok){
            console.log("user logged in successful");
            console.log(data.message);
            alert(data.message);
            window.location.href = "dashboard.html" 
        }
        else{
            console.log("login wasnt successfull");
            console.log(data.message);
            alert(data.message);
        }
    
} catch (error) {
        console.log(`we got an error ${error}`);
        alert("we have an error logging the user")
}
})