import React from 'react';
import AsideImage from '../Assets/night.jpg';
import './form.css';


function LoginForm() {
    return(
        <>
            
            <div className="main">

            <div className="image-container">
            <img src={AsideImage} alt="Description" />
            </div>
                
                
                <div className="form-container">
                <h1>Login</h1>
            <form action="#">
                <label htmlFor="userName">User Name</label>
                <input type="text" name='userName' id='userName' value='UserName' /><br /><br />
                

                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' value='Email' /><br /><br />
                
                <label htmlFor="password">Enter your password</label>
                <input type="password" name='password' id='password' value='Password' /><br /><br />

                <label htmlFor="repassword">Re enter password</label>
                <input type="password" name='repassword' id='repassword' value='ConfirmPassword' /><br /><br />
            
                        <div className="button-container">
                        <button type="submit">Submit</button>
                        </div>    
            </form>
            </div>
            
            </div>
            
        </>
    )
}

export default LoginForm; // Export the component