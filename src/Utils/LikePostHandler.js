import axios from "axios";
import { toast } from "react-toastify";
import { likePostService } from "../services/PostService";

export const likePostHandler = async (encodedToken, postId, dataDispatch) => {
  try {
    const { data, status } = await likePostService(postId, encodedToken)
    if (status === 201) {
      dataDispatch({ type: "SET_POSTS", payload: data?.posts });
    }
  } catch (e) {
    console.error(e);
    toast.error(e?.response?.data?.errors[0]);
  }
};
