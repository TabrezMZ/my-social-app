import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import './PageNotFound.css'
export const PageNotFound = () => {
    const navigate = useNavigate()
    const {darkMode} = useAuth()
    return (
        <>
            <div className={`page-not-found-main ${darkMode && "bgDarkmode"}`}>
                <div className="page-not-found-page">
                    <h4>Not Page Found</h4>
                    {/* <img src={ErrorImage} alt="page-not-found-img" /> */}
                    <button onClick={() => navigate("/")}>Back to Home</button>
                </div>
            </div>
        </>
    )
}