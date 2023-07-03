import { createContext, useContext, useReducer, useState } from "react";

const SocialDataContext = createContext()

export const SocialDataProvider = ({children}) => {

    return(
        <SocialDataContext.Provider value={{item : 3}} >{children}</SocialDataContext.Provider>
    )
}

export const useData = () => useContext(SocialDataProvider)
