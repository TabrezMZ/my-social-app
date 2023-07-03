import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const AuthRoute = ({children}) => {
    const location = useLocation()
    const {token } = useAuth()
    return(
        token ? children : <Navigate to='/login' path={{from : location}} />
    )
}