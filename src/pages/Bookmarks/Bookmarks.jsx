import { LeftSideBar, Navbar, PostCard, SideBar } from "../../components";

export const Bookmarks = (params) => {
    return (
        <>
            <div className={`bookmarks ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="bookmarks-content">
                    <LeftSideBar />
                    <div className="bookmarks-main">
                        {dataState?.bookmarks?.length === 0 ? (
                            <h3>No Bookmarks Yet</h3>
                        ) : (
                            dataState?.bookmarks.map((post) => (
                                <PostCard key={post._id} post={getBookmarkPosts(post)} />
                            ))
                        )}
                    </div>
                    <div className="rightSideBar">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
};
