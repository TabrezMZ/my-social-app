import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from '../../assets/iShareLogin.png'
import './Login.css'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const {loginUser} = useAuth()
  const [loginData , setLoginData] = useState({username : '', password: ''})
  const [hidePwd , setHidePwd] = useState(true)
  const [loginBtnDisabled , setLoginBtnDisabled] = useState(false)
  const saveLoginHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginUser(loginData)
  }
  const guestLoginHandler = () => {
    setLoginData({...loginData , username : 'adarshbalika' , password : 'adarshBalika123'})
  }
  return (
    <>
      <div className="login">
        <div className="login-img">
          <img src={loginImg} alt="ishare-login" />
        </div>
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={(e) => saveLoginHandler(e)} className="login-form">
            <div className="login-field">
              <label htmlFor="userName">
                Username <span>*</span>
              </label>
              <input
                type="text"
                id="userName"
                value={loginData?.username}
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, username: e.target.value }))
                }
                required
              />
            </div>
            <div className="login-field">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                type={hidePwd ? "password" : "text"}
                id="password"
                value={loginData?.password}
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, password: e.target.value }))
                }
                required
              />
              <span onClick={() => setHidePwd(!hidePwd)}>
                {hidePwd ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="login-btn">
              <button type="submit" disabled={loginBtnDisabled}>
                Login
              </button>
              <button type="button" onClick={guestLoginHandler} disabled={loginBtnDisabled}>
                Guest Login
              </button>
            </div>
          </form>
          <div className="login-link">
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>SignUp</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}