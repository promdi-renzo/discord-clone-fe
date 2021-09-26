import React from 'react'
import '../style/App.css'
import logo from '../assets/dc-logo.svg'
const Register = () => {
    return (
        <div className='register'>
            <div className='container'>
                <div className="imgcontainer">
                    <img src={logo} alt="" />
                </div>
                <form>
                    <div className="form__header">
                        <h1>Create an account</h1>
                        
                    </div>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                    <label htmlFor="usw">Username</label>
                    <input type="text" name='usw' required/>
                    <label htmlFor="psw">Password</label>
                    <input type="password" name='psw' required/>
                    <input type="submit" value='Login'/>
                    <div className="form__footer">
                        <p>Already have an account?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
