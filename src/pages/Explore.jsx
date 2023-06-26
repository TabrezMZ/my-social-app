import { PostCard } from "../components"

export const Explore = () => {
    return (
        <>
            <main className="mt-xl">
                <h3 className="pt-s">Explore</h3>
                <div className="flex flex-row nowrap">
                    <div
                        className="border p-xs mt-xs mb-xs mr-s width-7 txt-center fw-semibold"
                    >
                        For You
                    </div>
                    <div
                        className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
                    >
                        Trending
                    </div>
                    <div
                        className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
                    >
                        Technology
                    </div>
                    <div
                        className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
                    >
                        Sports
                    </div>
                    <div
                        className="border p-xs mt-xs mb-xs mr-s ml-s width-7 txt-center grey-color"
                    >
                        News
                    </div>
                </div>
                
                <PostCard />
            </main>
        </>
    )
}