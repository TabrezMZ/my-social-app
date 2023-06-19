export const Posts = () => {
    return (
        <>
            <main className="mr-l h-full white-bg">
                <h3 className="pt-s ml-s">
                    <i className="bi bi-arrow-left-short pr-s"></i>Post
                </h3>
                <div className="white-bg p-xs">
                    <div className="flex flex-column nowrap p-xs">
                        <div className="flex">
                            <div
                                className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                                style={{ aspectRatio: '1' }}
                            ></div>
                            <div
                                className="flex flex-row flex-align-center flex-space-between w-full"
                            >
                                <div className="flex flex-column">
                                    <p className="fw-semibold">Tanay Pratap</p>
                                    <p className="grey-color">@tanaypratap</p>
                                </div>
                                <p className="">∙∙∙</p>
                            </div>
                        </div>
                        <div>
                            <p className="pr-s pt-xs txt-m">
                                Non programmers on my timeline. Attention. <br />
                                <br />
                                After placing 100+ programmers i in top Indian startups, I am
                                thinking of coming up with a program for business roles as well.
                                <br />
                                <br />
                                Interested in helping me build this course? Join the telegram
                                group (in next tweet)
                            </p>
                            <p className="grey-color mt-s txt-s">
                                12:11 AM <span className="pl-xs">•</span>
                                <span className="pl-xs">Oct 11, 2021</span>
                            </p>
                            <div
                                className="w-full mt-s"
                                style={{ height: '1px', backgroundColor: 'rgb(206, 206, 206)' }}
                            ></div>
                            <p className="mt-s fw-bold">4 Likes</p>
                            <div
                                className="w-full mt-s"
                                style={{ height: '1px', backgroundColor: 'rgb(206, 206, 206)' }}
                            ></div>
                            <div
                                className="flex flex-row nowrap flex-space-between pb-xs pt-m pl-s pr-s flex-align-center"
                            >
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat-left"></i>
                                <i className="bi bi-share"></i>
                                <i className="bi bi-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full" style={{ height: '1px', backgroundColor: 'rgb(206, 206, 206)' }}></div>
                <div className="flex p-s">
                    <div
                        className="grey-bg br-full width-xl height-xl p-xs mr-s"
                        style={{ aspectRatio: '1' }}
                    ></div>
                    <input type="text" className="lynx-gray-bg border-none outline-transparent w-full mr-xs p-xs " style={{ backgroundColor: 'rgb(242, 242, 242)' }} placeholder="Comment your reply"/>
                        <button className="primary-bg secondary-color border-none outline-transparent pr-xl pl-xl">Post</button>
                </div>
                <div className="w-full" style={{ height: '1px', backgroundColor: 'rgb(206, 206, 206)' }}></div>
                <div className="white-bg  p-xs mt-s">
                    <div className="flex flex-row nowrap p-xs w-full">
                        <div className="grey-bg br-full width-xl height-xl p-xs mr-xs" style={{ aspectRatio: '1' }}></div>
                        <div>
                            <div className="flex flex-row flex-align-center  flex-space-between">
                                <div className="flex flex-column">
                                    <div className="flex flex-row">
                                        <p className="fw-bold">Ashwin Khode</p>
                                        <p className="grey-color pl-xs">
                                            @ashwin4real <span className="pl-xs">•</span>
                                            <span className="pl-xs">1m</span>
                                        </p>
                                    </div>
                                    <p className="lynx-gray-color">Replying to <span className="primary-color">@tanaypratap</span></p>
                                </div>
                                <p className="">∙∙∙</p>
                            </div>
                            <p className="pr-s pt-xs">
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
                                className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center"
                            >
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat-left"></i>
                                <i className="bi bi-share"></i>
                                <i className="bi bi-bookmark-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}