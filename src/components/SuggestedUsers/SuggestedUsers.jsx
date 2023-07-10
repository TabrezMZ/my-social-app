import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import { toast } from "react-toastify";
import { unfollowUserHandler } from "../../Utils/unFollowUserHandler";
import { followUserHandler } from "../../Utils/followUserHandler";
import './SuggestedUsers.css'
import { isFollowed } from "../../Utils/isFollowed";

export const SuggestedUsers = () => {
  const navigate = useNavigate()
  const { dataState, dataDispatch } = useData()
  const { userData, token } = useAuth()


  const userDatas = dataState?.allUsers?.find(
    (user) => user.username === userData?.username
  );

  const suggestedUsers = dataState?.allUsers
  ?.filter((user) => user.username !== userDatas?.username)
  ?.filter(
    (eachUser) =>
      !userDatas?.following?.find(
        (data) => data.username === eachUser.username
      )
  );

  
 

  return (
    <>
      <div>
        {dataState.usersLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <ClipLoader color="var(--primary-dark)" size={50} /> */}
            <p>Loading ...</p>
          </div>
        ) : (
          <div className="suggested-users-main">
            {suggestedUsers?.length > 0 ? (
              suggestedUsers
                ?.splice(0, 3)
                ?.map(({ _id, firstName, lastName, username, profileAvatar }) => {
                  return (
                    <li key={_id} className="suggested-user">
                      <div
                        className="suggested-user-name-profile"
                        onClick={() => {
                          navigate(`/profile/${username}`);
                        }}
                      >
                        <img
                          className="user-avatar"
                          src={
                            profileAvatar ||
                            `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                          }
                          alt="avatar"
                        />
                        <div className="suggestedUser-name">
                          <span>
                            {firstName} {lastName}
                          </span>
                          <small>@{username}</small>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (token) {
                            if (isFollowed(dataState?.allUsers, _id )) {
                              unfollowUserHandler(
                                token,
                                _id,
                                dataDispatch
                              );
                            } else {
                              followUserHandler(
                                token,
                                _id,
                                dataDispatch
                              );
                            }
                          } else {
                            toast.error("Please login to follow");
                            navigate("/login");
                          }
                        }}
                      >
                        {isFollowed(dataState?.allUsers, _id)
                          ? "Following"
                          : "Follow"}
                      </button>
                    </li>
                  );
                })
            ) : (
              <p>No suggested user is present.</p>
            )}
          </div>
        )}
      </div>
    </>
  )
};
