import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="white-bg">
                <div className="p-s pl-xxl txt-m ml-m">
                    <a href="../../index.html">
                        <span className="primary-color">My</span>Website
                    </a>
                </div>
            </nav>
            <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
                <div className="flex flex-column flex-space-between sidebar">
                    <div>
                        <div className="pt-s black-color fw-semibold">
                            <Link to='/home'>
                                <i className="bi bi-house"></i> &nbsp;
                                <span className="fw-bold">Home</span>
                            </Link>
                        </div>
                        <div className="pt-s black-color fw-semibold">
                            <Link to='/explore' >
                                <i className="bi bi-rocket"></i> &nbsp;
                                <span>Explore</span>
                            </Link>
                        </div>
                        <div className="pt-s black-color fw-semibold">
                            <Link to='/bookmark' >
                                <i className="bi bi-bookmark"></i> &nbsp;
                                <span>Bookmark</span>
                            </Link>
                        </div>
                        <div className="pt-s black-color fw-semibold">
                            <Link to='/profile'>
                                <i className="bi bi-person"></i> &nbsp;
                                <span>Profile</span>
                            </Link>
                        </div>
                        <button
                            className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"
                        >
                            Create New Post
                        </button>
                    </div>
                    <div className="flex flex-space-between flex-align-center">
                        <div className="flex">
                            <div className="grey-bg br-full width-xl height-xl"></div>
                            <div className="flex flex-column ml-xs">
                                <div className="fw-bold">Tanay Pratap</div>
                                <div className="fw-light grey-color">@tanaypratap</div>
                            </div>
                        </div>
                        <div className="grey-color fw-bold">...</div>
                    </div>
                </div>
            </aside>
        </>
    )
}