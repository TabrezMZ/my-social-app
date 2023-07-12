import { useEffect, useState } from "react"
import { LeftSideBar, Navbar, PostCard, SideBar } from "../../components"
import { useAuth } from "../../contexts/AuthContext"
import { useData } from "../../contexts/SocialContext"
import './LikePosts.css'

export const LikePosts = () => {
    const { darkMode, userData } = useAuth()
    const { dataState } = useData()
    const [postsLikedByUser, setPostsLikedByUser] = useState([]);

    useEffect(() => {
        setPostsLikedByUser(
            dataState?.posts?.filter((currPost) =>
                currPost.likes.likedBy.find(
                    (currUser) => currUser.username === userData?.username
                )
            )
        );
    }, [dataState?.posts]);
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