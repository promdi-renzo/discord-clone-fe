import React from 'react'
import '../style/App.css'
import logo from '../assets/dc-logo.svg'


const Login = () => {
    return (
        <div className='login'>
            <div className='container'>
                <div className="imgcontainer">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <div className="form__header">
                        <h1>Welcome Back!</h1>
                        <p>We're so excited to see you again</p>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                    <label htmlFor="psw">Password</label>
                    <input type="password" name='psw' required/>
                    <input type="submit" value='Login'/>
                    <div className="form__footer">
                        <p>Forgot your password?</p>
                        <p>Register an account</p>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Login
