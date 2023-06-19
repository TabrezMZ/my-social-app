export const Profile = () => {
    return (
        <>
            <main className="p-s">
                <div className="flex flex-column flex-center">
                    <div className="lynx-gray-bg width-7 height-7 br-full"></div>
                    <h3 className="pt-s">Tanay Pratap</h3>
                    <p className="grey-color txt-s">@tanaypratap</p>
                    <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
                        Edit Profile
                    </button>
                    <p className="m-xs p-xs">
                        Senior Software Engineer @Microsoft | Creator of India’s biggest
                        programming community | Tweets about JavaScript, ReactJS, Career and
                        Startups
                    </p>
                    <p className="primary-color">tanaypratap.com</p>
                    <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">0</p>
                            <p className="fw-semibold">Following</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">2K</p>
                            <p className="fw-semibold">Posts</p>
                        </div>
                        <div className="flex flex-column flex-center m-s ml-m mr-m">
                            <p className="fw-black">37.3K</p>
                            <p className="fw-semibold">Followers</p>
                        </div>
                    </div>
                </div>
                <h3 className="m-s">Your Posts</h3>
                <div className="white-bg">
                    <div className="flex flex-row nowrap p-xs">
                        <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
                        <div>
                            <div className="flex flex-row flex-align-center flex-space-between">
                                <div className="flex flex-row">
                                    <p className="fw-semibold">Tanay Pratap</p>
                                    <p className="grey-color pl-xs">
                                        @tanaypratap <span className="pl-xs">•</span>
                                        <span className="pl-xs">1 min</span>
                                    </p>
                                </div>
                                <p>∙∙∙</p>
                            </div>
                            <p className="pr-s">
                                Non programmers on my timeline. Attention. <br />
                                <br />
                                After placing 100+ programmers i in top Indian startups, I am
                                thinking of coming up with a program for business roles as well.
                                <br />
                                <br />
                                Interested in helping me build this course? Join the telegram
                                group (in next tweet)
                            </p>
                            <div
                                className="flex flex-row nowrap flex-space-between pt-s pr-s flex-align-center"
                            >
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat-left"></i>
                                <i className="bi bi-share"></i>
                                <i className="bi bi-sliders"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}