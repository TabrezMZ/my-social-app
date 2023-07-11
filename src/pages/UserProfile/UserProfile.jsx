import { useNavigate, useParams } from "react-router-dom";
import { EditProfileModal, FollowModal, LeftSideBar, Navbar, PostCard, SideBar } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { isFollowed } from "../../Utils/isFollowed";
import { getSortedPosts } from "../../Utils/SortPosts";
import { unfollowUserHandler } from "../../Utils/unFollowUserHandler";
import { followUserHandler } from "../../Utils/followUserHandler";
import './UserProfile.css'

export const UserProfile = () => {
    const {darkMode, token, userData} = useAuth()
    const {dataState, dataDispatch} = useData()
    const { username } = useParams();
    const [profileData, setProfileData] = useState({});
  const [editProfileModal, setEditProfileModal] = useState(false);
  const navigate = useNavigate();

  const [showFollowModal, setShowFollowModal] = useState({
    show: false,
    type: "",
  });

  const [usersLoading, setUsersLoading] = useState(false);

  

  const getUserDetails = async () => {
    const userId = dataState.allUsers.find((user)=> user.username === username)?._id
    try {
    //   setUsersLoading(true);
      const { data, status } = await axios.get(`/api/users/${userId}`);
      if (status === 200) {
        setProfileData(data?.user);
        setUsersLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const userPosts = dataState?.posts?.filter(
    (post) => post?.username === profileData?.username
  );

  useEffect(() => {
    getUserDetails();
  }, [username, dataState?.allUsers]);
    return (
        <>
            <div className={`profile ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="profile-content">
                    <LeftSideBar />
                    <div className="profile-main">
                        {usersLoading ? (
                            <p>Loading...</p>
                            // <ClipLoader color="var(--primary-dark)" size={50} />
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <div
                                    className={`profile-container ${darkMode && "bgSecondaryDarkMode"
                                        }`}
                                >
                                    {showFollowModal.show && (
                                        <FollowModal
                                            data={
                                                showFollowModal.type === "Following"
                                                    ? profileData?.following
                                                    : profileData?.followers
                                            }
                                            showFollowModal={showFollowModal}
                                            setShowFollowModal={setShowFollowModal}
                                        />
                                    )}
                                    {editProfileModal && (
                                        <EditProfileModal
                                            profileData={profileData}
                                            editProfileModal={editProfileModal}
                                            setEditProfileModal={setEditProfileModal}
                                        />
                                    )}
                                    <div className="profile-container-header">
                                        <img
                                            className="background-img"
                                            src={
                                                profileData?.backgroundImage ||
                                                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1688279047/tech-social/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-matrix-background-with-digits-1-0-illustration-vector_vzvd5n.jpg`
                                            }
                                            alt="background-pic"
                                        />
                                        <div className="profile-container-content">
                                            <div className="avatar-edit-follow-button">
                                                <span>
                                                    <img
                                                        className="avatar"
                                                        src={
                                                            profileData?.profileAvatar ||
                                                            `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                                                        }
                                                        alt="avatar"
                                                    />
                                                </span>
                                                <div className="edit-follow-button">
                                                    {profileData?.username === userData?.username ? (
                                                        <button
                                                            className="edit-button"
                                                            onClick={() => setEditProfileModal(true)}
                                                        >
                                                            Edit Profile
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={
                                                                isFollowed(dataState?.allUsers, profileData?._id)
                                                                    ? "following-button"
                                                                    : "follow-button"
                                                            }
                                                            onClick={() => {
                                                                if (token) {
                                                                    if (
                                                                        isFollowed(dataState?.allUsers, profileData?._id)
                                                                    ) {
                                                                        unfollowUserHandler(
                                                                            token,
                                                                            profileData?._id,
                                                                            dataDispatch
                                                                        );
                                                                    } else {
                                                                        followUserHandler(
                                                                            token,
                                                                            profileData?._id,
                                                                            dataDispatch
                                                                        );
                                                                    }
                                                                } else {
                                                                    toast.error("Please login to follow");
                                                                    navigate("/login");
                                                                }
                                                            }}
                                                        >
                                                            {isFollowed(dataState?.allUsers, profileData?._id)
                                                                ? "Following"
                                                                : "Follow"}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-details">
                                        <div className="profile-name-username">
                                            <h3>
                                                {profileData?.firstName} {profileData?.lastName}
                                            </h3>
                                            <small>@{profileData?.username}</small>
                                        </div>
                                        {profileData?.bio && <p>{profileData?.bio}</p>}
                                        {profileData?.website && (
                                            <a
                                                style={{
                                                    wordBreak: "break-all",
                                                    color: "var(--primary-color)",
                                                }}
                                                href={profileData?.website}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {profileData?.website}
                                            </a>
                                        )}
                                        <p>
                                            <i className="fa-solid fa-calendar"></i> Joined{" "}
                                            {` ${new Date(profileData?.createdAt)
                                                .toDateString()
                                                .split(" ")
                                                .slice(1, 4)
                                                .join(" ")}`}
                                        </p>
                                    </div>
                                    <div className="profile-post-follow-details">
                                        <p>
                                            {userPosts?.length}{" "}
                                            {`${userPosts?.length > 1 ? "Posts" : "Post"}`}
                                        </p>
                                        <p
                                            onClick={() =>
                                                setShowFollowModal((prev) => ({
                                                    ...prev,
                                                    show: true,
                                                    type: "Followers",
                                                }))
                                            }
                                        >
                                            {profileData?.followers?.length}{" "}
                                            {`${profileData?.followers?.length > 1
                                                    ? "Followers"
                                                    : "Follower"
                                                }`}
                                        </p>
                                        <p
                                            onClick={() =>
                                                setShowFollowModal((prev) => ({
                                                    ...prev,
                                                    show: true,
                                                    type: "Following",
                                                }))
                                            }
                                        >
                                            {profileData?.following?.length}{" "}
                                            {`${profileData?.following?.length > 1
                                                    ? "Followings"
                                                    : "Following"
                                                }`}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}
                                >
                                    {userPosts.length > 0 &&
                                        getSortedPosts(userPosts, "Latest")?.map((post) => (
                                            <PostCard key={post._id} post={post} />
                                        ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="rightSideBar">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
};
