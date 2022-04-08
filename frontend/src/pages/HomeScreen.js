import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect, Route } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function HomeScreen() {
    let { user } = useContext(AuthContext)
    const [admin, setAdmin] = useState(false)
    const [foundUser, setFoundUser] = useState(false)

    const clickAdmin = () => {
        setAdmin(true)
    }

    useEffect(() => {
        if (user) {
            setFoundUser(true)
        } else { setFoundUser(false) }
    }, [user])


    return (
        <>
            {!admin ? (
                <div className="container"style={{marginTop:'18%',textAlign:"center"}}>
                    <button className='btn btn-outline-danger mx-3 btn-lg' onClick={clickAdmin}>Admin</button>
                    <Link to="/student">
                    <button className='btn btn-outline-warning mx-3 btn-lg' >Student</button>
                    </Link>
                </div>
            ) : (<>
                <Route>{!foundUser ? <Redirect to="/login" /> : <Redirect to='/home' />}</Route>
            </>)
            }
        </>
    )
}

export default HomeScreen