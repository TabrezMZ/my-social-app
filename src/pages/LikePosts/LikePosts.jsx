import { LeftSideBar, Navbar, PostCard, SideBar } from "../../components"

export const LikePost = () => {
    return (
        <>
            <div className={`liked-posts ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="liked-posts-content">
                    <LeftSideBar />
                    <div className="liked-posts-main">
                        {postsLikedByUser?.length === 0 ? (
                            <h3>No liked Posts Yet</h3>
                        ) : (
                            <>
                                {postsLikedByUser?.map((post) => (
                                    <PostCard key={post._id} post={post} />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="rightSideBar">
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    )
}