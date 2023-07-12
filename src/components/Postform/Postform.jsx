import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/SocialContext";
import Picker from "emoji-picker-react";
import './Postform.css'
import { uploadMedia } from "../../Utils/MediaUpload";
import { createPostHandler } from "../../Utils/CreatePostHandler";

export const Postform = () => {
  const navigate = useNavigate()
  const { userData, darkMode, token } = useAuth()
  const { dataState, dataDispatch } = useData()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [media, setMedia] = useState('')

  const imageSelectHandler = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      Math.round(file.size / 1024000) > 1
        ? toast.error("File size should not be more than 1Mb")
        : setMedia(file);
    };
    input.click();
  }
  const videoSelectHandler = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      Math.round(file.size / 7168000) > 1
        ? toast.error("File size should not be more than 7Mb")
        : setMedia(file);
    };
    input.click();
  }
  const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = postContent + emoji;
    setPostContent(updatedContent);
    setShowEmojiPicker(false);
  }

  const postClickHandler = async () => {
    try {
      const response = media && (await uploadMedia(media));
      createPostHandler(
        { content: postContent, mediaURL: response ? response?.url : "", comments: [] },
        token,
        dataDispatch
      );
    } catch (e) {
      console.error(e);
    } finally {
      setPostContent("");
      setMedia('')
    }
  }

  const isPostDisabled = postContent.trim() === "" && !media;

  return (
    <>
      <div className={`post-form ${darkMode && "bgSecondaryDarkMode"}`}>
        <div className="post-form-container">
          <img
            className="create-post-avatar"
            onClick={() => {
              navigate(`/profile/${userData?.username}`);
            }}
            src={
              dataState?.allUsers?.find((user) => user._id === userData?._id)
                ?.profileAvatar ||
              `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
            }
            alt="profile-pic"
          />
          <textarea
            className={`${darkMode && "bgSecondaryDarkMode"}`}
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>
        {media && (
          <div className="selected-image-container">
            {media.type.slice(0, 5) === "image" ? (
              <img src={URL.createObjectURL(media)} alt="Post-pic" />
            ) : media.type.slice(0, 5) === "video" ? (
              <video alt="Post-video">
                <source src={URL.createObjectURL(media)} />
              </video>
            ) : null}
            <button onClick={() => setMedia(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
        <div className="post-form-button-container">
          <div className="post-form-icons">
            <div>
              <i className="fa-regular fa-image" onClick={imageSelectHandler}></i>
            </div>
            <div>
              <i
                className="fa-regular fa-file-video"
                onClick={videoSelectHandler}
              ></i>
            </div>
            <div
            // ref={domNode}
            >
              <i
                className="fa-regular fa-face-smile"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              ></i>
              {showEmojiPicker && (
                <div
                  className="show-emoji-picker"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Picker
                    onEmojiClick={emojiClickHandler}
                    width={300}
                    height={450}
                    theme={darkMode ? "dark" : "light"}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              toast.promise(postClickHandler, {
                pending: "Creating your post...",
                success: "Added new post successfully!",
                error: "Something went wrong, try again!",
              });
            }}
            disabled={isPostDisabled}
            className={isPostDisabled ? "post-button disabled" : "post-button"}
          >
            Post
          </button>
        </div>
      </div>
    </>
  )
}