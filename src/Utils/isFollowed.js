export const isFollowed = (users, userId) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    return users
      ?.find(({ _id }) => _id === userData?.user?._id)
      ?.following?.find(({ _id }) => _id === userId)
      ? true
      : false;
  };
  