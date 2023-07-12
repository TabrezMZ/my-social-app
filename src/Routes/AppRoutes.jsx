import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Bookmarks, Explore, Home, LikePosts, Login, PageNotFound, Signup, SinglePost, UserProfile, Welcome } from "../pages"
import { useAuth } from "../contexts/AuthContext"
import { AuthRoute } from "./AuthRoute"

export const AppRoutes = () => {
    const { token } = useAuth()
    return (
        <>
            <Routes>
                <Route path="/welcome" element={token ? <Navigate to='/' /> : <Welcome />} />
                <Route path="/login" element={token ? <Navigate to='/' /> : <Login />} />
                <Route path="/signup" element={token ? <Navigate to='/' /> : <Signup />} />
                <Route element={<AuthRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:postID" element={<SinglePost />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/liked-posts" element={<LikePosts />} />
                    <Route path="/profile/:username" element={<UserProfile />} />
                    <Route path="/explore" element={<Explore />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}   