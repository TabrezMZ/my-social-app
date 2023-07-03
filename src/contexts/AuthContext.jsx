import { createContext, useContext, useState } from "react";
import { loginService } from "../services/AuthService";


 const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const localStorageToken = JSON.parse(localStorage.getItem("login"));
    const [token , setAuthToken] = useState(localStorageToken?.token);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [userData, setUserData] = useState(localStorageUser?.user);

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
    const signUpUser = async (email , password, firstName, username) => {
       try {
        const { data : {foundUser, encodedToken}, status } = await loginService(email,password, firstName, username)
        if(status === 201) {
            localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
            setAuthToken(encodedToken)
            localStorage.setItem("user", JSON.stringify({ user: foundUser }));
            setUserData(foundUser)
        }
       } catch (error) {
        console.log("Error in login user", error);
       }
    }

    return(
        <AuthContext.Provider value={{loginUser, token , userData,  signUpUser}} >{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
