import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './input.css'

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const registerUser = async () => {
        await axios.post('http://127.0.0.1:8000/api/register', {
            email,
            username,
            password
        })
            .then(res => {
                alert('User created')
                history.push('/login')
            })
            .catch(error => {
                const err = error.response.data
                let show = []
                Object.keys(err).map(function (key) {
                    return show.push(err[key])
                })
                alert(show)
            })
    }

    return (
        <div>
            <div className="container floating-form my-5">
                <div className="floating-label my-4 mx-3">
                    <input className="floating-input" type="email" value={email} placeholder=" "
                        onChange={e => { setEmail(e.target.value) }} />
                    <span className="highlight"></span>
                    <label>Enter Email</label>
                </div>
                <div className="floating-label my-4 mx-3">
                    <input className="floating-input" type="text" value={username} placeholder=" "
                        onChange={e => { setUsername(e.target.value) }} />
                    <span className="highlight"></span>
                    <label>Enter Name</label>
                </div>
                <div className="floating-label my-4 mx-3">
                    <input className="floating-input" type="password" value={password} placeholder=" "
                        onChange={e => { setPassword(e.target.value) }} />
                    <span className="highlight"></span>
                    <label>Enter Password</label>
                </div>
                <div className="floating-label input-group">
                    <button className="btn btn-outline-primary mx-3 my-3 btn-sm "
                        type="button" onClick={registerUser}>
                        Register
                    </button>
                    <Link to='/login'>
                        <button className="btn btn-outline-primary mx-3 my-3 btn-sm "
                            type="button">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage