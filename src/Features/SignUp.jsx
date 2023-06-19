export const SignUp = () => {
    return (
           <>
            <div className="flex flex-column flex-center h-full w-full">
                <h2 className="fw-black  mb-m">
                    <span className="primary-color">My</span> Website
                </h2>
                <div className="white-bg br-m p-xxl pt-l pb-l" style={{width : '30rem'}} >
                    <h3 className="txt-center mb-s txt-l">Signup</h3>
                    <div className="flex flex-column">
                        <label for="name" className="txt-s">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey'}}
                            placeholder="Tanay Pratap"
                        />
                    </div>
                    <div className="flex flex-column">
                        <label for="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey'}}
                            placeholder="tanaypratap"
                        />
                    </div>
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
                            className="p-xs txt-s lynx-white-color br-s flex mb-s items-center "
                            style={{border : '1px solid grey'}}
                            placeholder="************"
                        />
                    </div>
                    <div className="flex flex-column">
                        <label for="password">Confirm Password</label>
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
                            <label className="pl-xs txt-cursor" for="rmbr-me">I accept all Terms & Conditions</label>
                        </div>

                    </div>
                    <button
                        className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                    >
                        Create New Account
                    </button>
                    <a href="#" className="txt-center w-full mt-m" style={{display : 'block'}}
                    >Already have an account </a
                    >
                </div>
            </div>
           </>
    )
}