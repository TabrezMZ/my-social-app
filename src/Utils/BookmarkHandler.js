import axios from "axios";



export const addToBookmarkPostHandler = async (
    encodedToken,
    postId,
    dataDispatch
  ) => {
    try {
      const { data, status } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (status === 200) {
        dataDispatch({
          type: "SET_POSTS_BOOKMARK",
          payload: data?.bookmarks,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

export const removeFromBookmarkPostHandler = async (
  encodedToken,
  postId,
  dataDispatch
) => {
  try {
    const { data, status } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (status === 200) {
      dataDispatch({
        type: "SET_POSTS_BOOKMARK",
        payload: data?.bookmarks,
      });
    }
  } catch (e) {
    console.error(e);
  }
};
