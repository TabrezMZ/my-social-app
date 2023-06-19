export const Login = () => {
    return (
        <>
            <div className="flex flex-column flex-center h-full w-full">
                <h2 className="fw-black txt-xl mb-m">
                    <span className="primary-color">My</span> Website
                </h2>
                <div className="white-bg br-m p-xxl pt-xl pb-xl" style={{width : '30rem'}}>
                    <h3 className="txt-center mb-m txt-l">Login</h3>
                    <div className="flex flex-column">
                        <label for="email">Email Address</label>
                        <input
                            type="text"
                            name="email"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey'}}
                            placeholder="tanay@neog.camp"
                        />
                    </div>
                    <div className="flex flex-column">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="p-xs txt-s lynx-white-color br-s flex items-center "
                            style={{border : '1px solid grey'}}
                            placeholder="************"
                        />
                    </div>
                    <div className="flex flex-align-center flex-space-between mt-m mb-m">
                        <div className="txt-s flex flex-align-center">
                            <input className="p-s txt-cursor" type="checkbox" name="rmbr-me" id="" />
                            <label className="pl-xs txt-cursor" for="rmbr-me">Remember Me</label>
                        </div>
                        <a href="#" className="action-color">Forgot your password?</a>
                    </div>
                    <button
                        className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                    >
                        Login
                    </button>
                    <a href="#" className="txt-center w-full mt-m" style={{display : 'block'}}
                    >Create New Account </a
                    >
                </div>
            </div>
        </>
    )
}