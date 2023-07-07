import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataReducer, initialData } from "../Reducer/DataReducer";
import { useAuth } from "./AuthContext";
import { getAllPostsService } from "../services/PostService";
import { getAllUserService } from "../services/UserService";

const SocialDataContext = createContext()

export const SocialDataProvider = ({children}) => {
    const {token} = useAuth()
    const [dataState , dataDispatch] = useReducer(DataReducer, initialData)
   
  
    const getAllPost = async () => {
        try {
            const {data : {posts}, status} = await getAllPostsService()
            dataDispatch({type : 'SET_POSTS', payload : posts})
        } catch (error) {
            console.log("Error in get all post", error);
        }
    }
    const getAllUser = async () => {
        try {
            const {data : {users}, status} = await getAllUserService()
            dataDispatch({type : 'SET_USERS', payload : users})
        } catch (error) {
            console.log("Error in get all post", error);
        }
    }

    useEffect(()=> {
       getAllPost()
       getAllUser()
    },[token])
    return(
        <SocialDataContext.Provider value={{dataState , dataDispatch}} >{children}</SocialDataContext.Provider>
    )
}

export const useData = () => useContext(SocialDataProvider)
