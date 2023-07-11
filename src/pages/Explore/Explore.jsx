import { useState } from "react";
import { getSortedPosts } from "../../Utils/SortPosts";
import { LeftSideBar, Navbar, PostCard, SideBar } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import './Explore.css'

export const Explore = (params) => {
    const {darkMode} = useAuth()
    const {dataState} = useData()
    const [sortByOption , setSortByOption] = useState('latest')
    const sortOptions = {
        latest : 'Latest Post',
        oldest : 'Oldest Post',
        trending : 'Trending Post'
      }

  const sortedPosts = getSortedPosts(dataState.posts, sortByOption);
  console.log(sortedPosts);
    return (
        <>
            <div className={`explore ${darkMode && "bgDarkmode"}`}>
                <Navbar />
                <div className="explore-content">
                    <LeftSideBar />
                    <div className="explore-main">
                        {dataState.postsLoading ? (
                            // <ClipLoader color="var(--primary-dark)" size={60} />
                            <p>Loading ...</p>
                        ) : (
                            <div>
                                <div className="sort-post">
                                    <h3 className="sort-text">{sortOptions[sortByOption]}</h3>
                                    <select
                                        onChange={(e) => setSortByOption(e.target.value)}
                                        className={`${darkMode && "bgDarkmode"}`}
                                    >
                                        {Object.keys(sortOptions).map((option) => (
                                            <option value={option} key={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {sortedPosts?.map((post) => (
                                        <PostCard post={post} key={post._id} />
                                    ))}
                                </div>
                            </div>
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
