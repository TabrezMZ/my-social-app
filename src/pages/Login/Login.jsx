import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from '../../assets/iShareLogin.png'
import './Login.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const { loginUser, darkMode } = useAuth()
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [hidePwd, setHidePwd] = useState(true)
  const [loginBtnDisabled, setLoginBtnDisabled] = useState(false)
  const saveLoginHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginUser(loginData)
  }
  const guestLoginHandler = () => {
    setLoginData({ ...loginData, username: 'adarshbalika', password: 'adarshBalika123' })
  }
  return (
    <>
      <div className={`login-container ${darkMode && "bgDarkmode"}`}>
        <div className={`login ${darkMode && "bgSecondaryDarkMode"}`}>
          <div className="login-logo">
            {/* <img src={logo} alt="logo" /> */}
            <h2>tech-social</h2>
          </div>
          <p className="tagline">Social media for programmers</p>
          <h2>Login</h2>
          <form  onSubmit={saveLoginHandler} >
            <div className="login-form-div">
              <label for="username">
                Username <span>*</span>
              </label>
              <input
                className={`${darkMode && "bgDarkmode"}`}
                id="username"
                type="text"
                placeholder="testadmin"
                required
                value={loginData.username}
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </div>

            <div className="login-form-div">
              <label for="password">
                Password <span>*</span>
              </label>
              <div className="password-wrapper">
                <input
                  className={`${darkMode && "bgDarkmode"}`}
                  minlength="4"
                  maxlength="10"
                  id="password"
                  type={hidePwd ? "password" : "text"}
                  placeholder={hidePwd ? "********" : "Enter password"}
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
                <span
                  onClick={() =>
                    setHidePwd((hidePwd) => !hidePwd)
                  }
                >
                  {hidePwd ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </span>
              </div>
            </div>

            <button type="submit" className="login-button" >
              Login
            </button>
            <button
              type="button"
              className="login-button guest"
              onClick={guestLoginHandler}
            >
              Login As Guest
            </button>
          </form>

          <p
            onClick={() => navigate("/signup")}
            className="create-new-account-link"
          >
            Create New account <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </div>
    </>
  )
}