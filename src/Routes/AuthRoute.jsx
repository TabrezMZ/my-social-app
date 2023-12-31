import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const AuthRoute = ({ children }) => {
    const location = useLocation()
    const { token } = useAuth()
    return token ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
}