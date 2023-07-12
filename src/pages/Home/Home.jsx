import { useState } from "react";
import { LeftSideBar, Navbar, PostCard, Postform, SideBar } from "../../components";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/SocialContext";
import './Home.css'
import { getSortedPosts } from "../../Utils/SortPosts";

export const Home = (params) => {
  const { darkMode, setDarkMode, userData, token } = useAuth()
  const { dataState } = useData()
  const [sortByOption, setSortByOption] = useState('latest')
  const sortOptions = {
    latest: 'Latest Post',
    oldest: 'Oldest Post',
    trending: 'Trending Post'
  }

  const followingUsers = dataState?.allUsers?.find(
    ({ username }) => username === userData?.username
  )?.following

  const postsOfFollowed = dataState.posts.filter((post) => post.username == userData.username || followingUsers?.some((eachUser) => eachUser.username == post.username))

  const sortedPosts = getSortedPosts(postsOfFollowed, sortByOption)


  return (
    <>
      <div className={`home ${darkMode && "bgDarkmode"}`}>
        <Navbar />
        <div className="home-content">
          <LeftSideBar />
          <div className={`home-main ${darkMode && "bgDarkmode"}`}>
            <Postform />
            {dataState?.isPostLoading ? (
              // <ClipLoader color="var(--primary-dark)" size={60} />
              <p>Loading ...</p>
            ) : postsOfFollowed?.length === 0 ? (
              <h3>No Posts to Display!</h3>
            ) : (
              <div style={{ width: "100%" }}>
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
                    <PostCard key={post._id} post={post} />
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
