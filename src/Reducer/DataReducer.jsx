export const initialData = {
  allUsers: [],
  posts: [],
  bookmarkPost: [],
  likePost: [],
  isPostLoading: false,
  isUserLoading: false,
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, allUsers: action.payload };
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "SET_POSTS_BOOKMARK":
      return { ...state, bookmarkPost: action.payload };
    case "USERS_LOADING":
      return { ...state, usersLoading: action.payload };
    case "POSTS_LOADING":
      return { ...state, postsLoading: action.payload };
    case "SET_ALL_BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "UPDATE_USER":
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "EDIT_USER":
      return {
        ...state,
        allUsers: state?.allUsers?.map((user) =>
          action.payload?._id === user._id ? { ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};
