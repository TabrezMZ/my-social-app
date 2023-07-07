import { useAuth } from "../../contexts/AuthContext";

export const PostCard = (params) => {
  const {darkMode , userData} = useAuth()
  return (
    <>
      <div
        key={_id}
        className={`postcard-main ${darkMode && "bgSecondaryDarkMode"}`}
      >
        <div className="postcard-header">
          <div
            className="postcard-header-left"
            onClick={() => navigate(`/profile/${username}`)}
          >
            <img
              src={
                dataState?.users?.find((user) => user.username === username)
                  ?.profileAvatar ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt="avatar"
            />
            <div>
              <h4>{`${dataState?.users?.find((user) => user.username === username)
                  ?.firstName
                } ${dataState?.users?.find((user) => user.username === username)
                  ?.lastName
                }`}</h4>
              <small>
                @{username}
                {" - "}
                <span>{getPostDate(createdAt)}</span>
              </small>
            </div>
          </div>
          <div className="edit-delete-icon" ref={domNode}>
            <i
              className="fa-solid fa-ellipsis"
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(!showOptions);
              }}
            ></i>
            {showOptions &&
              (username === authState?.user?.username ? (
                <div
                  className={`edit-delete-post-modal ${darkMode && "bgDarkmode"}`}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      editClickHandler();
                    }}
                  >
                    Edit
                  </div>
                  <hr />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteClickHandler();
                    }}
                  >
                    Delete
                  </div>
                </div>
              ) : (
                <div
                  className={`edit-delete-post-modal ${darkMode && "bgDarkmode"}`}
                >
                  <div
                    onClick={() => {
                      if (authState?.token) {
                        if (isFollowed(dataState?.users, userData._id)) {
                          unfollowUserHandler(
                            authState?.token,
                            userData?._id,
                            dataDispatch
                          );
                          setShowOptions(false);
                        } else {
                          followUserHandler(
                            authState?.token,
                            userData?._id,
                            dataDispatch
                          );
                          setShowOptions(false);
                        }
                      } else {
                        toast.error("Please login to follow");
                        navigate("/login");
                      }
                    }}
                  >
                    {isFollowed(dataState?.users, userData?._id)
                      ? "Following"
                      : "Follow"}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className="postcard-content-main"
          onClick={() => {
            navigate(`/post/${_id}`);
          }}
        >
          <Linkify className="content" componentDecorator={contentLink}>
            {content}
          </Linkify>
          {mediaURL && mediaURL.split("/")[4] === "image" ? (
            <img
              src={mediaURL}
              alt="post-pic"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          ) : (
            mediaURL && (
              <video
                controls
                onClick={(e) => e.stopPropagation()}
                src={mediaURL}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              ></video>
            )
          )}
        </div>
        <hr />
        <div className="postcard-buttons">
          <div>
            <i
              className={`${isliked() ? "fa-solid" : "fa-regular"} fa-heart`}
              onClick={() => {
                if (!authState?.token) {
                  toast.error("Please login to proceed!");
                } else {
                  isliked()
                    ? dislikePostHandler(authState?.token, _id, dataDispatch)
                    : likePostHandler(authState?.token, _id, dataDispatch);
                }
              }}
            ></i>{" "}
            <span>{likes?.likeCount}</span>
          </div>
          <div>
            <i
              className="fa-regular fa-comment"
              onClick={() => navigate(`/post/${_id}`)}
            ></i>{" "}
            <span>{comments?.length}</span>
          </div>
          <div>
            <i
              className={`${isBookmarked() ? "fa-solid" : "fa-regular"
                } fa-bookmark`}
              onClick={() => {
                if (!authState?.token) {
                  toast.error("Please login to proceed!");
                } else {
                  bookmarkClickHandler();
                }
              }}
            ></i>
          </div>
          <div>
            <i
              className="fa-regular fa-share-from-square"
              onClick={shareIconHandler}
            ></i>
          </div>
        </div>

        {showEditModal && (
          <PostModal post={post} setShowEditModal={setShowEditModal} />
        )}
      </div>
    </>
  )
};
