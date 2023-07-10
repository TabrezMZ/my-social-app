import axios from "axios";
import { dislikePostService } from "../services/PostService";

export const dislikePostHandler = async (
  encodedToken,
  postId,
  dataDispatch
) => {
  try {
    const { data, status } = await dislikePostService(postId, encodedToken)
    if (status === 201) {
      dataDispatch({ type: "SET_POSTS", payload: data?.posts });
    }
  } catch (e) {
    console.error(e);
  }
};
