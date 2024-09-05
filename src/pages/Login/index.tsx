import React from 'react'
import "./style.css"
import fox from "../../assets/icons/fox.png"
const Login = () => {
    return (
        <div className='whole-container'>
            <div className='logo-heading'>
                <img src={fox} alt="fox logo" className='foxLogo' />
                <h1 id='fox-ai-heading'>Fox AI</h1>
            </div>
            <div className="login-container-wrapper">

                <div className='logincontainer'>
                    <form className='formcontainer'>
                        <div className='fields'>
                            <label className='field-labels'>Email</label><br />
                            <input type="email" id="input" name='email' required />
                        </div>
                        <div className='fields'>
                            <label className='field-labels'>Password</label><br />
                            <input id="input" type='password' name='password' required />
                        </div>
                        <div id="forgotpwd">
                            <h6>Forgot password?</h6>
                        </div>
                        <div className="login-submit">
                            <input id="btn" type='submit' value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;