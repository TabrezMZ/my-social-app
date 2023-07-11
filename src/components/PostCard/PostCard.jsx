import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getPostDate } from "../../Utils/PostDate";
import { useState } from "react";
import { useData } from "../../contexts/SocialContext";
import { toast } from "react-toastify";
import Linkify from "react-linkify";
import { contentLink } from "../../Utils/ContentLink";
import { isFollowed } from "../../Utils/isFollowed";
import { followUserHandler } from "../../Utils/followUserHandler";
import { unfollowUserHandler } from "../../Utils/unFollowUserHandler";
import { dislikePostHandler } from "../../Utils/disLikePostHandler";
import './PostCard.css'
import { likePostHandler } from "../../Utils/LikePostHandler";
import { addToBookmarkPostHandler, removeFromBookmarkPostHandler } from "../../Utils/BookmarkHandler";
import { deletePostHandler } from "../../Utils/DeletePostHandler";
import { PostModal } from "../PostModal/PostModal";
export const PostCard = ({post}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const {darkMode , userData, token} = useAuth()
  const {dataState, dataDispatch} = useData()
  const { _id, content, mediaURL, likes, comments, username, createdAt } = post;
  const [showOptions, setShowOptions] = useState(false)
  const [showEditModal, setShowEditModal] = useState();
  const editClickHandler = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };

  const deleteClickHandler = () => {
    deletePostHandler(token, _id, dataDispatch);
    if (pathname === `/post/${_id}`) {
      setTimeout(() => {
        navigate("/");
        window.scroll({ top: 0, behavior: "smooth" });
      }, 2000);
    }
    setShowOptions((prev) => !prev);
  };

  const bookmarkClickHandler = () => {
    if (isBookmarked()) {
      removeFromBookmarkPostHandler(token, _id, dataDispatch);
      toast.success("Removed from Bookmarks");
    } else {
      addToBookmarkPostHandler(token, _id, dataDispatch);
      toast.success("Added to Bookmarks");
    }
  }
 
  const userDatas = dataState?.allUsers?.find(
    (user) => user.username === userData?.username
  );

  const postUserId = dataState.allUsers.find((user)=> user.username == username)?._id

  const isliked = () =>
    likes?.likedBy?.filter(({ _id }) => _id === userDatas?._id)
      ?.length !== 0;

  const isBookmarked = () =>
  dataState?.bookmarkPost.filter((post)=> post._id === _id) ?.length !== 0;

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`https://vconnect-tabrez-neog.netlify.app/post/${_id}`);
    toast.success("Link Copied. Start sharing!");
  };

  const shareData = {
    title: "tech-social",
    text: "Check out this post",
    url: `https://vconnect-tabrez-neog.netlify.app/post/${_id}`,
  };

  const shareHandler = async () => {
    try {
      await navigator.share(shareData);
    } catch (e) {
      console.error(e);
    }
  };

  const shareIconHandler = () => {
    if (navigator.share && navigator.canShare(shareData)) {
      shareHandler();
    } else {
      copyLinkHandler();
    }
  };

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
                dataState?.allUsers?.find((user) => user.username === username)
                  ?.profileAvatar ||
                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
              }
              alt="avatar"
            />
            <div>
              <h4>{`${dataState?.allUsers?.find((user) => user.username === username)
                  ?.firstName
                } ${dataState?.allUsers?.find((user) => user.username === username)
                  ?.lastName
                }`}</h4>
              <small>
                @{username}
                {" - "}
                <span>{getPostDate(createdAt)}</span>
              </small>
            </div>
          </div>
          <div className="edit-delete-icon" 
          // ref={domNode}
          >
            <i
              className="fa-solid fa-ellipsis"
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(!showOptions);
              }}
            ></i>
            {showOptions &&
              (username === userData?.username ? (
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
                      if (token) {
                        if (isFollowed(dataState?.allUsers, postUserId)) {
                          unfollowUserHandler(
                            token,
                            postUserId,
                            dataDispatch
                          );
                          setShowOptions(false);
                        } else {
                          followUserHandler(
                            token,
                            postUserId,
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
                    {isFollowed(dataState?.allUsers, postUserId)
                      ? "UnFollow"
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
                if (!token) {
                  toast.error("Please login to proceed!");
                } else {
                  isliked()
                    ? dislikePostHandler(token, _id, dataDispatch)
                    : likePostHandler(token, _id, dataDispatch);
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
                if (!token) {
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
