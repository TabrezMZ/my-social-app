import axios from "axios";
import { toast } from "react-toastify";


export const addCommentHandler = async (
    encodedToken,
    postId,
    commentData,
    dataDispatch
  ) => {
    try {
      const { data, status } = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: encodedToken } }
      );
      if (status === 201) {
        dataDispatch({ type: "SET_POSTS", payload: data?.posts });
        toast.success("Comment is added!");
      }
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, try again!");
    }
  };



export const deleteCommentHandler = async (
  encodedToken,
  postId,
  commentId,
  dataDispatch
) => {
  try {
    const { data, status } = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    if (status === 201 || status === 200) {
      dataDispatch({ type: "SET_POSTS", payload: data?.posts });
      toast.success("Comment is removed!");
    }
  } catch (e) {
    console.error(e);
    toast.error("Something went wrong, try again!");
  }
};
