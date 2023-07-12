import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import Picker from "emoji-picker-react";
import './PostModal.css'
import { uploadMedia } from "../../Utils/MediaUpload";
import { createPostHandler } from "../../Utils/CreatePostHandler";
import { useData } from "../../contexts/SocialContext";
import { editPostHandler } from "../../Utils/EditPostHandler";

export const PostModal = ({ post, setShowEditModal, setShowCreatePostModal }) => {
  const { darkMode, token } = useAuth()
  const { dataDispatch } = useData()
  const [updatedPost, setUpdatedPost] = useState(post || {});
  const [media, setMedia] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const isPostDisabled = !updatedPost?.content?.trim() && !media;

  const imageSelectHandler = () => {
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
  const buttonClickHandler = async () => {
    if (post) {
      try {
        if (media) {
          const response = await uploadMedia(media);
          editPostHandler(
            post._id,
            { content: updatedPost?.content, mediaURL: response.url },
            token,
            dataDispatch
          );
        } else {
          editPostHandler(
            post._id,
            { content: updatedPost?.content, mediaURL: updatedPost?.mediaURL },
            token,
            dataDispatch
          );
        }
      } catch (e) {
        console.error(e);
      } finally {
        setUpdatedPost({});
        setMedia(null);
        setShowEditModal(false);
      }
    } else {
      try {
        const response = media && (await uploadMedia(media));
        createPostHandler(
          {
            content: updatedPost?.content,
            mediaURL: response ? response?.url : "",
            comments: [],
          },
          token,
          dataDispatch
        );
      } catch (e) {
        console.error(e);
      } finally {
        setUpdatedPost({});
        setMedia(null);
        setShowCreatePostModal(false);
      }
    }
  }
  const emojiClickHandler = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = updatedPost?.content
      ? updatedPost?.content + emoji
      : emoji;
    setUpdatedPost((prev) => ({ ...prev, content: updatedContent }));
    setShowEmojiPicker(false);
  }
  const videoSelectHandler = () => {
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

  return (
    <>
      <div className="edit-post-modal-container">
        <div
          className={`edit-post-modal ${darkMode && "bgDarkmode"}`}
        // ref={postModalNode}
        >
          <div className="edit-post-modal-header">
            {post ? <h1>Edit Post</h1> : <h1>Create Post</h1>}
            <i
              className="fa-solid fa-xmark"
              onClick={() =>
                post ? setShowEditModal(false) : setShowCreatePostModal(false)
              }
            ></i>
          </div>
          <textarea rows={'7'} cols={'50'}
            className={`${darkMode && "bgDarkmode"}`}
            value={updatedPost?.content}
            onChange={(e) =>
              setUpdatedPost((prev) => ({
                ...prev,
                content: e.target.value,
              }))
            }
          ></textarea>
          {updatedPost?.mediaURL || media ? (
            <div className="selected-image-container">
              {updatedPost?.mediaURL?.split("/")[4] === "image" ||
                media?.type?.split("/")[0] === "image" ? (
                <img
                  src={media ? URL.createObjectURL(media) : updatedPost?.mediaURL}
                  alt="Post-pic"
                />
              ) : updatedPost?.mediaURL?.split("/")[4] === "video" ||
                media?.type?.split("/")[0] === "video" ? (
                <video alt="Post-video">
                  {media ? (
                    <source src={URL.createObjectURL(media)} />
                  ) : (
                    <source src={updatedPost?.mediaURL} />
                  )}
                </video>
              ) : null}
              <button
                onClick={() =>
                  updatedPost?.mediaURL
                    ? setUpdatedPost((prev) => ({ ...prev, mediaURL: null }))
                    : setMedia(null)
                }
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className="edit-post-modal-buttons">
            <div className="edit-post-modal-icons">
              <div>
                <i
                  className="fa-regular fa-image"
                  onClick={imageSelectHandler}
                ></i>
              </div>
              <div>
                <i
                  className="fa-regular fa-file-video"
                  onClick={videoSelectHandler}
                ></i>
              </div>
              <div
              //  ref={domNode}
              >
                <i
                  className="fa-regular fa-face-smile"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                ></i>
                {showEmojiPicker && (
                  <div
                    className="edit-emoji-picker"
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
                toast.promise(buttonClickHandler, {
                  pending: post ? "Editing your post" : "Creating your post",
                  success: post
                    ? "Edited your post successfully!"
                    : "Added new post successfully!",
                  error: "Something went wrong, try again!",
                });
              }}
              disabled={isPostDisabled}
              className={
                isPostDisabled ? "modal-button disabled" : "modal-button"
              }
            >
              {post ? "Update" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
};
