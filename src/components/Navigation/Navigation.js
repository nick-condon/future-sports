import React, { useState } from "react";
import './Navigation.css';
import TournamentsTable from "../Main/TournamentsTable";
import SearchMenuIcon from '../../assets/images/search.png';
import Overlay from "../Main/Overlay";

const Navigation = () => {

  const [selectedNavItem, setSelectedNavItem] = useState("Welcome");

  const [searchMenuToggle, setSearchToggle] = useState(false);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen)
  }

  const toggleSearchMenu = () => {
    setSearchToggle(!searchMenuToggle)
  }

  const navItems = [
    { id: 1, title: "Welcome", name: "#Welcome" },
    { id: 2, title: "Coaching", name: "#Coaching" },
    { id: 3, title: "Gallery", name: "#Gallery" },
    { id: 4, title: "Tournaments", name: "" },
    { id: 5, title: "Tips", name: "#Tips" },
    { id: 6, title: "Contact", name: "#Contact" },
  ];

  return (
    <div className="Navigation">
      <div className="logo">
        FutureSports
      </div>
      <ul className="NavigationMenus">
        {navItems.map((item) => {
          return (
            //If it is not the Tournaments option then we can set the nav link to go to the anchor point
            item.title !== "Tournaments" ? (
              <li
                key={item.id}
                onClick={() => setSelectedNavItem(item.name)}
                className={selectedNavItem === item.name ? `activeNavItem` : ""}
              >
                <a href={`${item.name}`}>{item.title}</a>
              </li>
            ) : (
              //If it is the Tournaments option, we have to open the Overlay by changing the state of isOverlayOpen.
              //Unable to pass this as a variable, so using conditional render, which I know limits this code's reusability as it is.
              //
              <li
                key={item.id}
                onClick={() => setIsOverlayOpen(!isOverlayOpen)}
                className={selectedNavItem === item.name ? `activeNavItem` : ""}
              >
                <a>{item.title}</a>
              </li>
            )
          );
        })}
      </ul>
      <div className="SearchIcon">
        <img src={SearchMenuIcon} onClick={toggleSearchMenu} alt="search magnifying glass"></img>
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
      <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
      >
        {TournamentsTable()}
      </Overlay>
    </div >
  );
};

export default Navigation;
