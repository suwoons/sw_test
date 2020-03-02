import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import data from "./data"; 
import "../stylesheets/Heading.css"

class Heading extends Component {
    render() {
        return (
            <div class="title">
                <img src="https://i.ibb.co/Jv7WkyL/teams-grey.png" alt="teams-grey" border="0"></img>
                <span class="title-words">Teams</span>
                <button class="create">
                    <FontAwesomeIcon icon={faPlus} style={{marginRight: "13px", color: "white"}}/>
                    CREATE NEW TEAM</button>

                <div class="col">
                    {/* When either icon or textbox is hovered or focused, whole area changes to blue */}
                    <div class="topnav"
                        onMouseEnter={(e) => document.getElementById("searchIcon").style.color = "rgb(88, 142, 204)"}
                        onMouseLeave={(e) => document.activeElement == document.getElementById("searchBox") 
                            ? document.getElementById("searchIcon").style.color = "rgb(88, 142, 204)"
                            : document.getElementById("searchIcon").style.color = "rgb(161, 161, 161)"}>
                    
                    <FontAwesomeIcon id="searchIcon" icon={faSearch}/>
                    <input id="searchBox" type="text" placeholder="Search team name ..." 
                        onFocus={(e) => {
                            document.getElementById("searchIcon").style.color = "rgb(88, 142, 204)";
                            return e.target.placeholder = "Enter team name ...";}}
                        onBlur={(e) => {
                            document.getElementById("searchIcon").style.color = "rgb(161, 161, 161)";
                            return e.target.placeholder = "Search team name ...";}}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;