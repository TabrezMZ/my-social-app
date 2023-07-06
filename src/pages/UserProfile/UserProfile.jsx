import { EditProfileModal, FollowModal, LeftSideBar, Navbar, PostCard, SideBar } from "../../components";

export const UserProfile = (params) => {
    return (
        <>
            <div className={`profile ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="profile-content">
                    <LeftSideBar />
                    <div className="profile-main">
                        {usersLoading ? (
                            <ClipLoader color="var(--primary-dark)" size={50} />
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
                                                    {profileData?.username === authState?.user?.username ? (
                                                        <button
                                                            className="edit-button"
                                                            onClick={() => setEditProfileModal(true)}
                                                        >
                                                            Edit Profile
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={
                                                                isFollowed(dataState?.users, profileData?._id)
                                                                    ? "following-button"
                                                                    : "follow-button"
                                                            }
                                                            onClick={() => {
                                                                if (authState?.token) {
                                                                    if (
                                                                        isFollowed(dataState?.users, profileData?._id)
                                                                    ) {
                                                                        unfollowUserHandler(
                                                                            authState?.token,
                                                                            profileData?._id,
                                                                            dataDispatch
                                                                        );
                                                                    } else {
                                                                        followUserHandler(
                                                                            authState?.token,
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
                                                            {isFollowed(dataState?.users, profileData?._id)
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
