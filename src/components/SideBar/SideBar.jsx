import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import { SuggestedUsers } from "../SuggestedUsers/SuggestedUsers";

export const SideBar = () => {

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
