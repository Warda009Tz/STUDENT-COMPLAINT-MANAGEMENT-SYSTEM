import React from "react";
import '../App.css'
function Register(){
    return(
        <>
              <div className="wrapper&{action}">
                <div className="form-box Register">
                <form action="">
 
                    <h2>Registration Form</h2>
                    <div className="input-box">
                      <input type="text"
                        placeholder='FirstName' required/>
                        </div>

                        <div className="input-box">
                      <input type="text"
                        placeholder='LastName' required/>
                        </div>
                        <div className="input-box">
                      <input type="password"
                        placeholder='Password' required/>
                        </div>
                   
            
                        <button type="submit">Register</button>
                         
                   </form>
                   </div>
                </div>
        
    
        </>
    )
} 
export default Register;