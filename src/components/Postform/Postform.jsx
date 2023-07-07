import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Postform = () => {
  const {userData, darkMode} = useAuth()
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [media, setMedia] = useState('')

  const imageSelectHandler = (e) => {
      setMedia(e.target.files)
  }
  const videoSelectHandler = (e) => {
      setMedia(e.target.files)
  }
  const emojiClickHandler = (e) => {
    setPostContent(postContent + e)
  }

  const postClickHandler = () => {
    console.log('clicked')
  }

    return(
        <>
        <div className={`post-form ${darkMode && "bgSecondaryDarkMode"}`}>
      <div className="post-form-container">
        <img
          className="create-post-avatar"
          onClick={() => {
            navigate(`/profile/${userData?.username}`);
          }}
          src={
            dataState?.users?.find((user) => user._id === userData?._id)
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
          <div ref={domNode}>
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