import { createContext, useContext, useState } from "react";
import { loginService, signUpService } from "../services/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


 const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const naviagate = useNavigate()
    const localStorageToken = JSON.parse(localStorage.getItem("login"));
    const [token , setAuthToken] = useState(localStorageToken?.token);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [userData, setUserData] = useState(localStorageUser?.user);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
      );

    const loginUser = async (username , password) => {
       try {
        const { data : {foundUser, encodedToken}, status } = await loginService(username,password)
        if(status === 200) {
            localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
            setAuthToken(encodedToken)
            localStorage.setItem("user", JSON.stringify({ user: foundUser }));
            setUserData(foundUser)
        }
       } catch (error) {
        console.log("Error in login user", error);
       }
    }
    const signUpUser = async (SignupData) => {
       try {
        const { data : {createdUser, encodedToken}, status } = await signUpService(SignupData)
        if(status === 201) {
            localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
            setAuthToken(encodedToken)
            localStorage.setItem("user", JSON.stringify({ user: createdUser }));
            setUserData(createdUser)
        }
       } catch (error) {
        console.log("Error in login user", error);
       }
    }

    const userLogout = () => {
        naviagate('/login')
         setAuthToken('')
         setUserData('')
         localStorage.removeItem('login')
         localStorage.removeItem('user')
         toast.success("You're logged out!");
    }

    return(
        <AuthContext.Provider value={{loginUser, token , userData,  signUpUser, darkMode, setDarkMode, userLogout}} >{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
