import React, { useState } from "react";
import './Navigation.css';
// import TournamentsTable from "../Main/TournamentsTable";
import SearchMenuIcon from '../../assets/images/search.png';
import CancelButton from '../../assets/images/cancel.png';


const Navigation = () => {

  const [selectedNavItem, setSelectedNavItem] = useState("Welcome");

  const [searchMenuToggle, setSearchToggle] = useState(false);

  const toggleSearchMenu = () => {
    setSearchToggle(!searchMenuToggle)
  }

  const navItems = [
    { id: 1, title: "Welcome", name: "#Welcome" },
    { id: 2, title: "Coaching", name: "#Coaching" },
    { id: 3, title: "Gallery", name: "#Gallery" },
    { id: 4, title: "Tournaments", name: "#Tournaments" },
    { id: 5, title: "Tips", name: "#Tips" },
    { id: 6, title: "Contact Us", name: "#Contact Us" },
  ];

  return (
    <div className="Navigation">
      <div className="logo">
        FutureSports
      </div>
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelectedNavItem(item.name)}
              className={selectedNavItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="SearchIcon">
        <span><button onClick={toggleSearchMenu}><img src={SearchMenuIcon}></img></button></span>
      </div>
      {(searchMenuToggle && (
        <div>
          <form id="searchBox" className="SearchBox" onsubmit="search_website()">
            <input id="searchbar" type="text" className="SearchData" placeholder="Search" required />
            <button type="button" value="Search" className="SearchButton" onclick="search();"><img src={SearchMenuIcon} width="22px" alt="" /></button>
        </form>
     </div>
  ))
}
    </div >
    );
};

export default Navigation;
