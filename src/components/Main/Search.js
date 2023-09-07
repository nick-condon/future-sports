import React from "react";
import { useState } from 'react';
import SearchMenuIcon from '../../assets/images/search.png'; 


export default function Search(searchTerm) {

    //Gathers all text into a static Nodelist
    

    
        let input = document.getElementById('Searchbar').value;
        let x = document.querySelectorAll("h1,h2,h3,p");

        console.log(input);

        if (input !== "") {
            //Cycle through the node list
            for (i = 0; i < x.length; i++) {
                //Check if the element contains the search term
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    // Do nothing if it is not there and move onto the next item
                } else {
                    //Use regular expression with global and case insensitive setting (gi)
                    let regExp = new RegExp(input, "gi");
                    //High search term within the element
                    x[i].innerHTML = (x[i].textContent).replace(regExp, "<mark>$&</mark>");
                }
            }
        }
    }


    return (
        <div>
            <form id="searchBox" className="SearchBox" onsubmit="search_website()">
                <input id="Searchbar" type="text" className="SearchData" placeholder="Search" required />
                <button type="button" value="Search" className="SearchButton" onclick={setSearchTerm()}><img src={SearchMenuIcon} width="22px" alt="" /></button>
            </form>
        </div>
    )
}




// //Search functionality
// function search() {

//     //Gets text in the search box
//     let input = document.getElementById('searchbar').value;

//     //Gathers all text into a static Nodelist
//     let x = document.querySelectorAll("h1,h2,h3,p");

//     //Check if the search string is empty
//     if (input !== "") {
//         //Cycle through the node list
//         for (i = 0; i < x.length; i++) {
//             //Check if the element contains the search term
//             if (!x[i].innerHTML.toLowerCase().includes(input)) {
//                 // Do nothing if it is not there and move onto the next item
//             } else {
//                 //Use regular expression with global and case insensitive setting (gi)
//                 let regExp = new RegExp(input, "gi");
//                 //High search term within the element
//                 x[i].innerHTML = (x[i].textContent).replace(regExp, "<mark>$&</mark>");
//             }
//         }
//     }

// }