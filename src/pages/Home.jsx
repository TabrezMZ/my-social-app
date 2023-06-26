import { CreatePost, PostCard } from "../components"

export const Home = () => {
    return (
        <>
            <main className="mt-xl">
                <CreatePost />
                <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
                    <h3 className="">Latest Posts</h3>
                    <i className="bi bi-sliders2-vertical"></i>
                </div>
                <PostCard/>
            </main>
        </>
    )
}