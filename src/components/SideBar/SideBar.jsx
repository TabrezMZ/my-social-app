import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import { SuggestedUsers } from "../SuggestedUsers/SuggestedUsers";
import { useAuth } from "../../contexts/AuthContext";
import './SideBar.css'

export const SideBar = () => {
  const { darkMode } = useAuth()
  return (
    <>
      <div className={`right-sidebar ${darkMode && "bgDarkmode darkModeBorder"}`}>
        <Searchbar />
        <div className={`suggested-users ${darkMode && "bgSecondaryDarkMode"}`}>
          <h4>Suggestions for you</h4>
          <SuggestedUsers />
        </div>
      </div>
    </>
  )
};
