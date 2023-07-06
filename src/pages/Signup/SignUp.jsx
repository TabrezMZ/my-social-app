import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from '../../assets/iShareSignup.png'
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './SignUp.css'

export const Signup = () => {
    const navigate = useNavigate()
    const { signUpUser, darkMode } = useAuth()
    const [SignupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    })
    const [hidePwd, setHidePwd] = useState({ pwd: true, confirmPwd: true })
    const [signupBtnDisabled, setSignupBtnDisabled] = useState(false)
    const [pwdMatch, setPwdMatch] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState('')


    const signupHandler = (e) => {
        console.log(SignupData);
        signUpUser(SignupData)
        e.preventDefault();
    }

    useEffect(() => {
        if (SignupData.password !== '' && confirmPassword !== '') {
            setPwdMatch(SignupData.password === confirmPassword)
        }
    }, [SignupData.password, confirmPassword])

    return (
        <>
            <div className={`signup-container ${darkMode && "bgDarkmode"}`}>
                <div className={`signup ${darkMode && "bgSecondaryDarkMode"}`}>
                    <h2>Sign Up</h2>
                    <form onSubmit={(e) => signupHandler(e)}>
                        <div className="name">
                            <div>
                                <label for="first-name">
                                    First Name <span>*</span>
                                </label>
                                <input
                                    className={`${darkMode && "bgDarkmode"}`}
                                    id="first-name"
                                    placeholder="Test"
                                    required
                                    value={SignupData.firstName}
                                    onChange={(e) =>
                                        setSignupData((prev) => ({
                                            ...prev,
                                            firstName: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div>
                                <label for="last-name">
                                    Last Name <span>*</span>
                                </label>
                                <input
                                    className={`${darkMode && "bgDarkmode"}`}
                                    id="last-name"
                                    placeholder="Admin"
                                    required
                                    value={SignupData.lastName}
                                    onChange={(e) =>
                                        setSignupData((prev) => ({
                                            ...prev,
                                            lastName: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <label for="username">
                                Username <span>*</span>
                            </label>
                            <input
                                className={`${darkMode && "bgDarkmode"}`}
                                id="username"
                                placeholder="testadmin"
                                required
                                value={SignupData.username}
                                onChange={(e) =>
                                    setSignupData((prev) => ({
                                        ...prev,
                                        username: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div>
                            <label for="email">
                                Email <span>*</span>
                            </label>
                            <input
                                className={`${darkMode && "bgDarkmode"}`}
                                id="email"
                                placeholder="test@gmail.com"
                                required
                                type="email"
                                value={SignupData.email}
                                onChange={(e) =>
                                    setSignupData((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div>
                            <label for="password">
                                Password <span>*</span>
                            </label>
                            <div className="password-wrapper">
                                <input
                                    className={`${darkMode && "bgDarkmode"}`}
                                    id="password"
                                    type={hidePwd?.pwd ? "password" : "text"}
                                    placeholder={hidePwd?.pwd ? "********" : "Enter password"}
                                    minlength="4"
                                    maxlength="10"
                                    required
                                    value={SignupData.password}
                                    onChange={(e) =>
                                        setSignupData((prev) => ({
                                            ...prev,
                                            password: e.target.value,
                                        }))
                                    }
                                />
                                <span
                                    onClick={() =>
                                        setHidePwd((prev) => ({
                                            ...prev,
                                            pwd: !hidePwd?.pwd,
                                        }))
                                    }
                                >
                                    {hidePwd?.pwd ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="confirm-password">
                                Confirm Password <span>*</span>
                            </label>
                            <div className="password-wrapper">
                                <input
                                    className={`${darkMode && "bgDarkmode"}`}
                                    minlength="4"
                                    maxlength="10"
                                    id="confirm-password"
                                    type={hidePwd?.confirmPwd ? "password" : "text"}
                                    placeholder={
                                        hidePwd?.confirmPwd ? "********" : "Enter password"
                                    }
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                />
                                <span
                                   onClick={() =>
                                    setHidePwd((prev) => ({
                                        ...prev,
                                        confirmPwd: !hidePwd?.confirmPwd,
                                    }))
                                }
                                >
                                    {hidePwd?.confirmPwd ? (
                                        <i className="fa-regular fa-eye-slash"></i>
                                    ) : (
                                        <i className="fa-regular fa-eye"></i>
                                    )}
                                </span>
                            </div>
                            {!pwdMatch ? (
                                <div>Password Do Not Match</div>
                            ) : (
                                ""
                            )}
                        </div>

                        <button type="submit" className="signup-button" disabled={!pwdMatch || signupBtnDisabled}>
                            Signup
                        </button>
                    </form>

                    <p onClick={() => navigate("/login")}>
                        Already have an account <i className="fa-solid fa-angle-right"></i>
                    </p>
                </div>
            </div>
        </>
    )
}