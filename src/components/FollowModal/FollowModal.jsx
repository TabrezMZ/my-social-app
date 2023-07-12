import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hooks/outSideClick";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import './FollowModal.css'

export const FollowModal = ({ data, showFollowModal, setShowFollowModal }) => {

  const navigate = useNavigate()
  const { darkMode } = useAuth()
  const { dataState } = useData()
  const domNode = useOutsideClick(() =>
    setShowFollowModal(() => ({ show: false }))
  );
  return (
    <>
      <div className="follow-modal-container">
        <div className={`follow-modal ${darkMode && "bgDarkmode"}`} ref={domNode}>
          <div className="follow-modal-header">
            <h3>{showFollowModal.type}</h3>
            <i
              className="fa-solid fa-xmark"
              onClick={() =>
                setShowFollowModal((prev) => ({ ...prev, show: false, type: "" }))
              }
            ></i>
          </div>
          {data.length > 0 ? (
            <div className="follow-modal-users-container">
              {data?.map(({ _id, username, firstName, lastName }) => {
                return (
                  <li key={_id}>
                    <div
                      onClick={() => {
                        navigate(`/profile/${username}`);
                        setShowFollowModal((prev) => ({
                          ...prev,
                          show: false,
                        }));
                      }}
                      className="follow-modal-users"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        src={
                          dataState?.allUsers?.find((user) => user._id === _id)
                            ?.profileAvatar ||
                          `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                        }
                        alt="avatar"
                      />
                      <div>
                        <span>
                          {
                            dataState?.users?.find((user) => user._id === _id)
                              ?.firstName
                          }{" "}
                          {
                            dataState?.users?.find((user) => user._id === _id)
                              ?.lastName
                          }
                        </span>
                        <small>@{username}</small>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          ) : (
            <div>
              <p>{`No ${showFollowModal.type} !`}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )

};
