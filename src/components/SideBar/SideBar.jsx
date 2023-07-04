import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
    const [showNewPostModal, setShowNewPostModal] = useState(false)
    const [showPorfileAction, setShowProfileAction] = useState(false)
    return(
        <>
        <div className="sidebar">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "activeNav" : "nav")}
      >
        <button className="center">
          <FaHome className="icon" />
          <span>Home</span>
        </button>
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? "activeNav" : "nav")}
      >
        <button className="center">
          <FaHashtag className="icon" />
          <span>Explore</span>
        </button>
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) => (isActive ? "activeNav" : "nav")}
      >
        <button className="center">
          <FaRegBookmark className="icon" />
          <span>Bookmarks</span>
        </button>
      </NavLink>

      <button
        className="center nav-new-post-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShowNewPostModal(true);
          setShowProfileAction(false);
        }}
      >
        <FaPlus className="icon" />
        <span>New Post</span>
      </button>

      <NavLink
        className="nav"
        onClick={(e) => {
          e.stopPropagation();
          setShowProfileAction(!showPorfileAction);
        }}
      >
        <button className="center nav-profile-btn">
          <UserAvatar user={currentUser} />
          <span>
            <p>
              {currentUser?.firstName} {currentUser?.lastName}
            </p>
            <p>@{currentUser?.username}</p>
          </span>
        </button>
      </NavLink>

      {showPorfileAction ? (
        <div className="nav-profile-action">
          <button
            className="center"
            onClick={() => {
              navigate(`/profile/${currentUser?.username}`);
              setShowProfileAction(false);
            }}
          >
            <MdOutlineManageAccounts className="icon" />
            <span>Go to Profile</span>
          </button>
          <button
            className="center"
            onClick={() => {
              logoutUser();
              setShowProfileAction(false);
            }}
          >
            <MdLogout className="icon" />
            <span>Logout </span>
          </button>
        </div>
      ) : null}

      {showNewPostModal ? (
        <div
          className="new-post-model-box"
          onClick={(e) => {
            e.stopPropagation();
            setShowNewPostModal(false);
          }}
        >
          <PostModal setShowNewPostModal={setShowNewPostModal} />
        </div>
      ) : null}
    </div>
        </>
    )
};
