import React, { useState } from "react";
import './Navigation.css';

const Navigation = () => {

    const [selectedNavItem, setSelectedNavItem] = useState("welcome");
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
    </div>
    );
};

export default Navigation;
