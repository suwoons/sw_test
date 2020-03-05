import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../stylesheets/Heading.css"

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tab,
        };
    }

    render() {
        console.log("current tab: ", this.props.tab);

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
                        onMouseLeave={(e) => document.activeElement === document.getElementById("searchBox") 
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

                    <div class="tab-list">
                    <div class="w3-bar w3-black">
                        <button class="w3-bar-item w3-button active" onClick={() => this.props.handleTabChange("All")}>All</button>
                        <button class="w3-bar-item w3-button" onClick={() => this.props.handleTabChange("Favorites")}>Favorites</button>
                        <button class="w3-bar-item w3-button" onClick={() => this.props.handleTabChange("Archived")}>Archived</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;