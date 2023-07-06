export const PageNotFound = () => {
    return (
        <>
            <div className={`page-not-found-main ${darkMode && "bgDarkmode"}`}>
                <div className="page-not-found-page">
                    <img src={ErrorImage} alt="page-not-found-img" />
                    <button onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </div>
        </>
    )
}