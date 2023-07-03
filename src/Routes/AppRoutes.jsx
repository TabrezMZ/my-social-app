import { Route, Routes } from "react-router-dom"
import { Login, Signup, Welcome } from "../pages"

export const AppRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
        </>
    )
}   