import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from ".."

export const Login = () => {

    const { loginUser, signUpUser } = useAuth()
    const loginformValue = {
        username: '',
        password: ''
    }
    const [loginForm, setLoginForm] = useState(loginformValue)

    const filFormValue = (e, fieldName) => {
        setLoginForm((prev) => ({ ...prev, [fieldName]: e.target.value }))
    }

    const saveLoginForm = (e) => {
        e.preventDefault()
        const { username, password } = loginForm
        if (username && password) {
            loginUser(username, password)
        }
    }

    return (
        <>
            <div className="flex flex-column flex-center h-full w-full">
                <h2 className="fw-black txt-xl mb-m">
                    <span className="primary-color">My</span> Website
                </h2>
                <div className="white-bg br-m p-xxl pt-xl pb-xl" style={{ width: '30rem' }}>
                    <form onSubmit={(e) => saveLoginForm(e)}>
                        <h3 className="txt-center mb-m txt-l">Login</h3>
                        <div className="flex flex-column">
                            <label>User Name</label>
                            <input
                                type="text"
                                name="username"
                                value={loginForm.username}
                                className="p-xs txt-s lynx-white-color br-s mb-s "
                                style={{ border: '1px solid grey', color: 'black' }}
                                placeholder="tanay@neog.camp"
                                required
                                onChange={(e) => filFormValue(e, 'username')}
                            />
                        </div>
                        <div className="flex flex-column">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={loginForm.password}
                                className="p-xs txt-s lynx-white-color br-s flex items-center "
                                style={{ border: '1px solid grey', color: 'black' }}
                                placeholder="************"
                                required
                                onChange={(e) => filFormValue(e, 'password')}
                            />
                        </div>
                        <div className="flex flex-align-center flex-space-between mt-m mb-m">
                            <div className="txt-s flex flex-align-center">
                                <input className="p-s txt-cursor" required type="checkbox" name="rmbr-me" id="" />
                                <label className="pl-xs txt-cursor" >Remember Me</label>
                            </div>
                            <a href="#" className="action-color">Forgot your password?</a>
                        </div>
                        <button type="submit"
                            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                        >
                            Login
                        </button>
                        <Link to='/signup' className="txt-center w-full mt-m" style={{ display: 'block' }}
                        >Create New Account
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}