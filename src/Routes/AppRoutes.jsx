import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Home, Login, Signup, Welcome } from "../pages"
import { useAuth } from "../contexts/AuthContext"
import { AuthRoute } from "./AuthRoute"

export const AppRoutes = () => {
    const navigate = useNavigate()
    const {token} = useAuth()
    return(
        <>
        <Routes>
            <Route path="/welcome" element={ token ? <Navigate to='/' /> : <Welcome/>} />
            <Route path="/login" element={token ? <Navigate to='/' />  :<Login/>} />
            <Route path="/signup" element={ token ? <Navigate to='/'/>: <Signup/>} />
            <Route element={<AuthRoute/>}>
             <Route path="/" element={<Home/>} />
            </Route>
           
        </Routes>
        </>
    )
}   