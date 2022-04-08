import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)

    return (
        <div className='container col-lg-4 col-xs-4'>
            <form onSubmit={loginUser}>
                <h1 className="h3 my-3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" placeholder="Enter Email" required />
                    <label htmlFor="floatingInput">Email address </label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" placeholder="Enter Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
            <div className='my-3'>
            <Link to='/register' >Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginPage
