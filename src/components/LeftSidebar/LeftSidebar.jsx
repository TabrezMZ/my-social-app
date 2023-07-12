import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { PostModal } from "../PostModal/PostModal";
import './LeftSidebar.css'

export const LeftSideBar = () => {
    const navigate = useNavigate()
    const { userData, darkMode, token, userLogout } = useAuth()
    const [showCreatePostModal, setShowCreatePostModal] = useState(false)
    const getActiveStyle = ({ isActive }) => ({
        color: isActive && "var(--white-color)",
        backgroundColor: isActive && "var(--primary-color)",
    });



    return (
        <>
            <div>
                <div
                    className={`left-sidebar ${darkMode && "bgDarkmode darkModeBorder"}`}
                >
                    <NavLink
                        to="/"
                        className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        style={getActiveStyle}
                    >
                        <i className="fa-solid fa-house"></i> <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        style={getActiveStyle}
                    >
                        <i className="fa-solid fa-compass"></i> <span>Explore</span>
                    </NavLink>
                    <NavLink
                        to="/bookmarks"
                        className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        style={getActiveStyle}
                    >
                        <i className="fa-solid fa-bookmark"></i> <span>Bookmarks</span>
                    </NavLink>
                    <NavLink
                        to="/liked-posts"
                        className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        style={getActiveStyle}
                    >
                        <i className="fa-solid fa-heart"></i> <span>Liked Posts</span>
                    </NavLink>
                    <NavLink
                        to={`/profile/${userData?.username}`}
                        className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        style={getActiveStyle}
                    >
                        <i className="fa-solid fa-user"></i> <span>Profile</span>
                    </NavLink>
                    <p
                        onClick={() => {
                            setShowCreatePostModal((prev) => !prev);
                        }}
                        className={
                            showCreatePostModal
                                ? `left-sidebar-items-modal create ${darkMode && "darkModeColor"}`
                                : `left-sidebar-items create ${darkMode && "darkModeColor"}`
                        }
                    >
                        <i className="fa-solid fa-plus"></i>
                    </p>
                    {token ? (
                        <p
                            onClick={() => userLogout()}
                            className={`left-sidebar-items ${darkMode && "darkModeColor"}`}
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>{" "}
                            <span>Logout</span>
                        </p>
                    ) : (
                        <p onClick={() => navigate("/login")} className="left-sidebar-items">
                            <i className="fa-solid fa-right-to-bracket"></i> <span>Login</span>
                        </p>
                    )}
                    <button
                        className="create-post-btn"
                        style={{ cursor: !token && "not-allowed" }}
                        disabled={!token && true}
                        onClick={() => setShowCreatePostModal((prev) => !prev)}
                    >
                        Create New Post
                    </button>
                </div>
                {showCreatePostModal && (
                    <PostModal setShowCreatePostModal={setShowCreatePostModal} />
                )}
            </div>
        </>
    )
}