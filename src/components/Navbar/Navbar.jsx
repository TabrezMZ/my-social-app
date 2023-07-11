import { useNavigate } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import './Navbar.css'

export const Navbar = () => {
  const navigate = useNavigate()
  const { darkMode, setDarkMode, userData, token } = useAuth()
  const {dataState} = useData()
  return (
    <>
      <div className={`navbar ${darkMode && "bgDarkmode"}`}>
        <nav>
          <div className="left-nav" onClick={() => navigate("/")}>
            <h2>VConnect</h2>
          </div>
          <div className="right-nav">
            <div className="searchBar">
              <Searchbar />
            </div>
            {darkMode ? (
              <i className="fa-solid fa-sun" onClick={() => setDarkMode(false)}></i>
            ) : (
              <i
                className="fa-solid fa-moon"
                onClick={() => setDarkMode(true)}
              ></i>
            )}
            {token && (
              <img
                onClick={() => {
                  navigate(`/profile/${userData?.username}`);
                }}
                src={
                  dataState?.allUsers?.find(
                    (user) => user._id === userData?._id
                  )?.profileAvatar ||
                  `https://res.cloudinary.com/dqlasoiaw/image/upload/v1686688962/tech-social/blank-profile-picture-973460_1280_d1qnjd.png`
                }
                alt="profile-pic"
              />
            )}
          </div>
        </nav>
      </div>
    </>
  )
}