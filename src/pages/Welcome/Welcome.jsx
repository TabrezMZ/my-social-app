import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import { useAuth } from '../../contexts/AuthContext'

export const Welcome = () => {
  const navigate = useNavigate()
  const { darkMode } = useAuth()
  return (
    <>
      <div className={`landing-container ${darkMode && "bgDarkmode"}`}>
        <div className="landing-main">
          {/* <img src={header} alt="header" className="header-image" /> */}
          <div className="lending-right">
            <div className="landing-logo">
              {/* <img src={logoGif} alt="logo" /> */}
              <p>Tech-Social</p>
            </div>
            <div className="landing-content">
              <p>
                <span>Follow</span>people around the globe
              </p>
              <p>
                <span>Connect</span>with yor friends
              </p>
              <p>
                <span>Share</span>what you are thinking
              </p>
            </div>
            <button className="join-now-btn" onClick={() => navigate("/signup")}>
              Join Now
            </button>
            <p className="login-link">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Log In</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}