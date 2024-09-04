import React from 'react'

const Login = () => {
    return (
        <div className="login-container-wrapper">

            <div className='logincontainer'>
                <form className='formcontainer'>
                    <div className='fields'>
                        <label>Email</label><br />
                        <input type="email" name='email' required />
                    </div>
                    <div className='fields'>
                        <label>Password</label><br />
                        <input type='password' name='password' required />
                    </div>
                    <div className="login-submit">
                        <input id="btn" type='submit' value="Sign in" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login;