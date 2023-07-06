export const EditCommentModal = (params) => {
    return (
        <>
            <div className="edit-comment-modal-container">
                <div
                    className={`edit-comment-modal ${darkMode && "bgDarkmode"}`}
                    ref={editCommentModalNode}
                >
                    <div className="edit-comment-header">
                        <h2>Edit Comment</h2>
                        <i
                            className="fa-solid fa-xmark"
                            onClick={() =>
                                setShowEditCommentModal((prev) => ({ ...prev, show: false }))
                            }
                        ></i>
                    </div>
                    <textarea
                        className={`${darkMode && "bgDarkmode"}`}
                        value={updatedComment?.text}
                        onChange={(e) =>
                            setUpdatedComment((prev) => ({
                                ...prev,
                                text: e.target.value,
                            }))
                        }
                    ></textarea>
                    <div className="edit-comment-modal-buttons">
                        <div className="edit-comment-modal-icons">
                            <div ref={showEmojiPickerNode}>
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
                        <button onClick={buttonClickHandler} className="modal-button">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
