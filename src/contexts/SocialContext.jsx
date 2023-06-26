import { createContext, useContext, useReducer, useState } from "react";
import { loginService } from "../services/AuthService";
import { SocialReducer, initialState } from "../reducer/SocialReducer";


 const SocialContext = createContext()

export const SocialContextProvider = ({children}) => {
   const [Data , dispatch] = useReducer(SocialReducer, initialState)

    return(
        <SocialContext.Provider value={{Data , dispatch}} >{children}</SocialContext.Provider>
    )
}

export const useData = () => useContext(SocialContext)
