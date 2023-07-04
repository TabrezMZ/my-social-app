import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataReducer, initialData } from "../Reducer/DataReducer";
import { useAuth } from "./AuthContext";
import { getAllPostsService } from "../services/PostService";
import { getAllUserService } from "../services/UserService";

const SocialDataContext = createContext()

export const SocialDataProvider = ({children}) => {
    const {token} = useAuth()
    const {allData , dataDispatch} = useReducer(DataReducer, initialData)
  
    const getAllPost = async () => {
        try {
            const res = await getAllPostsService()
            console.log(res);
        } catch (error) {
            console.log("Error in get all post", error);
        }
    }
    const getAllUser = async () => {
        try {
            const res = await getAllUserService()
            console.log(res);
        } catch (error) {
            console.log("Error in get all post", error);
        }
    }

    useEffect(()=> {
       getAllPost()
       getAllUser()
    },[])
    return(
        <SocialDataContext.Provider value={{allData , dataDispatch}} >{children}</SocialDataContext.Provider>
    )
}

export const useData = () => useContext(SocialDataProvider)
