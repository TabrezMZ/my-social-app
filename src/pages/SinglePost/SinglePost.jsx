import { useEffect, useState } from "react";
import { EditCommentModal, LeftSideBar, Navbar, PostCard, SideBar } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import './SinglePost.css'
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../contexts/SocialContext";
import axios from "axios";
import { addCommentHandler, deleteCommentHandler } from "../../Utils/CommentHandler";

export const SinglePost = () => {
    const { darkMode, token, userData } = useAuth()
    const { dataState, dataDispatch } = useData()
    const [singlePostLoading, setSinglePostLoading] = useState(true);
    const [postDetails, setPostDetails] = useState({});
    const [commentText, setCommentText] = useState("");
    const [showEditCommentModal, setShowEditCommentModal] = useState({
        show: false,
        commentId: "",
    });
    const navigate = useNavigate();

    const { postID } = useParams();

    const getPostDetails = async () => {
        try {
            const { data, status } = await axios.get(`/api/posts/${postID}`);
            if (status === 200) {
                setPostDetails(data?.post);
                setSinglePostLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    };


    const commentDetails =
        showEditCommentModal.show &&
        postDetails?.comments?.find(
            (comment) => comment._id === showEditCommentModal.commentId
        );

    const isCommentDisabled = commentText.trim() === "";

    useEffect(() => {
        getPostDetails();
    }, [dataState.posts]);
    return (
        <>
            <div className={`post-details ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="post-details-content">
                    <LeftSideBar />
                    <div className="post-details-main">
                        {singlePostLoading ? (
                            // <ClipLoader color="var(--primary-dark)" size={60} />
                            <p>Loading ...</p>
                        ) : (
                            postDetails && (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%"
                                    }}
                                >
                                    <PostCard key={postDetails._id} post={postDetails} />
                                    {/* <div className="comment-main-container">
                                        <img
                                            src={
                                                userData?.profileAvatar ||
                                                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                                            }
                                            alt="profile-pic"
                                        />
                                        <div className="comment-input-container">
                                            <input
                                                className={`${darkMode && "bgDarkmode"}`}
                                                type="text"
                                                placeholder="Add a comment..."
                                                value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                            />
                                            <i
                                                className="fa-solid fa-paper-plane"
                                                style={{
                                                    cursor: isCommentDisabled && "not-allowed",
                                                }}
                                                onClick={() => {
                                                    !isCommentDisabled &&
                                                        addCommentHandler(
                                                            token,
                                                            postID,
                                                            commentText,
                                                            dataDispatch
                                                        );
                                                    setCommentText("");
                                                }}
                                            ></i>
                                        </div>
                                    </div> */}
                                    {postDetails?.comments?.length > 0 ? (
                                        <div
                                            className={`single-page-comment-container ${darkMode && "bgSecondaryDarkMode"
                                                }`}
                                        >
                                            {postDetails?.comments?.map((comment) => {
                                                const userComment = dataState?.users?.find(
                                                    (user) => user.username === comment?.username
                                                );
                                                return (
                                                    <div
                                                        key={comment._id}
                                                        className="post-comment-container"
                                                    >
                                                        <img
                                                            src={
                                                                userComment?.profileAvatar ||
                                                                `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                                                            }
                                                            alt="profile-pic"
                                                            onClick={() =>
                                                                navigate(`/profile/${userComment?.username}`)
                                                            }
                                                        />
                                                        <div
                                                            className={`post-comment-content ${darkMode && "bgDarkmode"
                                                                }`}
                                                        >
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    flexDirection: "row",
                                                                    justifyContent: "space-between",
                                                                    alignItems: "center",
                                                                }}
                                                            >
                                                                <strong>{`${userComment?.firstName} ${userComment?.lastName}`}</strong>
                                                                {userComment?.username ===
                                                                    userData?.username && (
                                                                        <div className="comment-edit-delete-icon">
                                                                            <i
                                                                                className="fa-solid fa-pen"
                                                                                onClick={() =>
                                                                                    setShowEditCommentModal({
                                                                                        show: true,
                                                                                        commentId: comment._id,
                                                                                    })
                                                                                }
                                                                            ></i>
                                                                            <i
                                                                                className="fa-solid fa-trash-can"
                                                                                onClick={() =>
                                                                                    deleteCommentHandler(
                                                                                        token,
                                                                                        postID,
                                                                                        comment?._id,
                                                                                        dataDispatch
                                                                                    )
                                                                                }
                                                                            ></i>
                                                                        </div>
                                                                    )}
                                                            </div>
                                                            <p className="comment-text">{comment?.text}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p>No comments</p>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                    <div className="rightSideBar">
                        <SideBar />
                    </div>
                </div>
                {showEditCommentModal.show && (
                    <EditCommentModal
                        comment={commentDetails}
                        setShowEditCommentModal={setShowEditCommentModal}
                        postId={postDetails?._id}
                    />
                )}
            </div>
        </>
    )
}