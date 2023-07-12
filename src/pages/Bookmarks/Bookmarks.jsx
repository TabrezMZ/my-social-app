import { LeftSideBar, Navbar, PostCard, SideBar } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import './Bookmarks.css'

export const Bookmarks = (params) => {
    const { darkMode } = useAuth();
    const { dataState } = useData();

    const getBookmarkPosts = (post) =>
        dataState?.posts?.find((posti) => posti._id === post._id);
    return (
        <>
            <div className={`bookmarks ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="bookmarks-content">
                    <LeftSideBar />
                    <div className="bookmarks-main">
                        {dataState?.bookmarkPost?.length === 0 ? (
                            <h3>No Bookmarks Yet</h3>
                        ) : (
                            dataState?.bookmarkPost.map((post) => (
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
