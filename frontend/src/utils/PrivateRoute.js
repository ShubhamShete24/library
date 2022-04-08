import { Route, Redirect } from 'react-router-dom'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext)
    const [admin, setAdmin] = useState(false)

    const clickAdmin = () => {
        setAdmin(true)
    }

    return (
        <>
            {!admin ? (
                <>
                    <button onClick={clickAdmin}>Admin</button>
                    <button>Student</button>
                </>
            ) : (<>
                <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>
            </>)
            }
            {/* <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route> */}
        </>
    )
}

export default PrivateRoute;