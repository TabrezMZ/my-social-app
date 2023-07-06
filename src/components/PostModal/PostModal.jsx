export const PostModal = () => {
    return(
        <>
      <div className="edit-post-modal-container">
      <div
        className={`edit-post-modal ${darkMode && "bgDarkmode"}`}
        ref={postModalNode}
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
        <textarea
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
            <div ref={domNode}>
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
