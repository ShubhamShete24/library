import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Library</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <ul className="navbar-nav">
                        {
                            user ? (
                                <>
                                    <li className="nav-item active">
                                        <>Hello, {user.username}</>
                                    </li>
                                    <li className="nav-item active">
                                        <button className="btn btn-outline-danger mx-3 btn-sm" onClick={logoutUser} >Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item active">
                                        <Link className="nav-link active" aria-current="page" to="/login">Admin</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link active" aria-current="page" to="/student">Student</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>

                </div>
            </nav>

        </div>
    )
}

export default Header
