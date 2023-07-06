import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";

export const Searchbar = (params) => {
  const { darkMode, setDarkMode, userData, token } = useAuth()
  const { dataState, dataDispatch } = useData()
  const [searchInput, setSearchInput] = useState('')
  const [searchedUsers, setSearchedUsers] = useState([])
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setSearchInput(value)
    setSearchedUsers(dataState.allUser.filter((user) => user.firstName.toLowerCase().includes(value.toLowerCase()) || user.lastName.toLowerCase().includes(value.toLowerCase()) || user.username.toLowerCase().includes(value.toLowerCase())))
  }




  return (
    <>
      <div>
        <div className={`search-bar ${darkMode && "bgSecondaryDarkMode"}`}>
          <input
            type="text"
            className={`${darkMode && "bgSecondaryDarkMode"}`}
            placeholder="Search Users"
            value={searchInput}
            onChange={inputChangeHandler}
          />
          {searchInput.trim().length === 0 ? (
            <i className="fa-solid fa-magnifying-glass"></i>
          ) : (
            <i className="fa-solid fa-xmark" onClick={clearSearch}></i>
          )}
        </div>
        <div className="search-main-container">
          {searchedUsers.length > 0 && searchInput.trim().length > 0 ? (
            <div
              className={`searched-users-container ${darkMode && "bgDarkmode"}`}
            >
              {searchedUsers?.map(
                ({ _id, firstName, lastName, username, profileAvatar }) => {
                  return (
                    <li key={_id} className="searched-user">
                      <div
                        className="searched-user-name-profile"
                        onClick={() => {
                          navigate(`/profile/${username}`);
                          clearSearch();
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
                        <div className="searchedUser-name">
                          <span>
                            {firstName} {lastName}
                          </span>
                          <small>@{username}</small>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
            </div>
          ) : (
            searchInput.trim().length > 0 && (
              <div
                className={`searched-users-container ${darkMode && "bgDarkmode"}`}
              >
                <p>User not found!</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
};
